from django.shortcuts import render
from rest_framework import generics, permissions
from .models import User
import re

from .serializers import UserSerializer, RegistrationSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken

from .firebase_auth import verify_firebase_token, get_or_create_firebase_user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['user'] = UserSerializer(self.user).data
        return data

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]  # <--- ADD THIS

    def perform_create(self, serializer):
        # Validate phone number format
        phone_number = serializer.validated_data.get('phone_number', '')
        if not re.match(r'^\+?\d{10,15}$', phone_number):
            raise ValidationError({'phone_number': 'Enter a valid 10-digit phone number'})
        
        serializer.save()


# Create your views here.

# tesing route 
class PingView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"message": "API is working fine well done for your success,wow"})



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import ValidationError


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        refresh_token = request.data.get("refresh")
        print(refresh_token)
        if not refresh_token:
            raise ValidationError({"refresh": "Refresh token is required."})

        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"detail": "Logout successful."}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": "Invalid or expired token"}, status=status.HTTP_400_BAD_REQUEST)

# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import firebase_admin
from firebase_admin import auth

class FirebaseLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        id_token = request.data.get('id_token')
        if not id_token:
            return Response({'error': 'ID token is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            decoded_token = auth.verify_id_token(id_token)
            firebase_user = auth.get_user(decoded_token['uid'])

            user, created = User.objects.get_or_create(
                email=firebase_user.email,
                defaults={
                    'username': firebase_user.email.split('@')[0],
                    'first_name': firebase_user.display_name.split()[0] if firebase_user.display_name else '',
                    'last_name': ' '.join(firebase_user.display_name.split()[1:]) if firebase_user.display_name else '',
                    'is_verified': True
                }
            )

            if created:
                user.set_unusable_password()
                user.save()

            refresh = RefreshToken.for_user(user)

            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'user': UserSerializer(user).data
            })
        
        except ValueError:
            return Response({'error': 'Invalid Firebase token'}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# truecaller view
import jwt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User

@api_view(['POST'])
def truecaller_callback(request):
    try:
        # Extract JWT payload (no signature verification needed)
        token = request.data.get('requestPayload')
        if not token:
            return Response({'error': 'Missing token'}, status=status.HTTP_400_BAD_REQUEST)
        
        decoded = jwt.decode(token, options={"verify_signature": False})
        
        # Extract user data
        phone = decoded.get('phoneNumber')
        if not phone:
            return Response({'error': 'Phone number missing'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Get or create user
        user, created = User.objects.get_or_create(
            phone_number=phone,
            defaults={
                'username': phone,
                'is_verified': True
            }
        )
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user': {
                'id': user.id,
                'phone_number': user.phone_number,
                'is_verified': user.is_verified
            }
        })
        
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)