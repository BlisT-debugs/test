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
import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

from .models import User
from .serializers import UserSerializer


@api_view(["POST"])
@permission_classes([AllowAny])
def truecaller_callback(request):
    print("✅ Truecaller callback hit")
    print("Request body:", request.data)

    access_token = request.data.get("accessToken")
    endpoint = request.data.get("endpoint")

    if not access_token or not endpoint:
        return Response({"error": "Missing accessToken or endpoint"}, status=400)

    try:
        # ✅ Call Truecaller Profile API
        headers = {"Authorization": f"Bearer {access_token}"}
        profile_res = requests.get(endpoint, headers=headers, timeout=5)

        if profile_res.status_code != 200:
            return Response(
                {"error": f"Failed to fetch Truecaller profile {profile_res.status_code}"},
                status=400,
            )

        profile = profile_res.json()
        print("✅ Truecaller profile:", profile)

        # ✅ Extract user fields safely
        phone_numbers = profile.get("phoneNumbers", [])
        phone_number = str(phone_numbers[0]) if phone_numbers else None

        first_name = profile.get("name", {}).get("first", "User")
        last_name = profile.get("name", {}).get("last", "")

        email = (
            profile.get("onlineIdentities", {}).get("email")
            or f"{phone_number}@truecaller.com"
        )

        avatar_url = profile.get("avatarUrl", None)

        if not phone_number:
            return Response({"error": "Phone number missing in Truecaller profile"}, status=400)

        # ✅ Ensure required address fields for model
        DEFAULT_ADDRESS = {
            "address_line1": "Auto-generated",
            "city": "Unknown",
            "state": "Unknown",
            "postal_code": "000000",
            "country": profile.get("addresses", [{}])[0].get("countryCode", "India"),
        }

        # ✅ Find or create user
        user, created = User.objects.get_or_create(
            phone_number=phone_number,
            defaults={
                "username": phone_number,
                "email": email,
                "first_name": first_name,
                "last_name": last_name,
                "profile_picture": avatar_url,
                "is_truecaller_verified": True,
                **DEFAULT_ADDRESS,
            },
        )

        # ✅ If user existed, update verification & details if needed
        if not created:
            updated = False
            if not user.is_truecaller_verified:
                user.is_truecaller_verified = True
                updated = True
            if avatar_url and user.profile_picture != avatar_url:
                user.profile_picture = avatar_url
                updated = True
            if updated:
                user.save()

        # ✅ Issue JWT tokens
        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": UserSerializer(user).data,
            }
        )

    except Exception as e:
        print("❌ Error fetching/processing Truecaller profile:", str(e))
        return Response(
            {"error": f"Truecaller profile fetch failed: {str(e)}"},
            status=500,
        )
