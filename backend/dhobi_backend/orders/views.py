# from django.shortcuts import render
# from rest_framework import viewsets, permissions
# from .models import Order
# from .serializers import OrderSerializer

# class IsOwnerOrAdmin(permissions.BasePermission):
#     def has_object_permission(self, request, view, obj):
#         return obj.user == request.user or request.user.is_admin

# class OrderViewSet(viewsets.ModelViewSet):
#     queryset = Order.objects.all()
#     serializer_class = OrderSerializer
#     permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdmin]

#     def get_queryset(self):
#         user = self.request.user
#         return Order.objects.filter(user=user) if not user.is_admin else Order.objects.all()

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)


# orders/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .serializers import OrderSerializer


from rest_framework import viewsets, permissions
from .models import Order
from .serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]
    # views.py
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


    # def perform_create(self, serializer):
    #     # This ensures request.user is used
    #     serializer.save(user=self.request.user)

# class OrderCreateView(APIView):
#     permission_classes = [permissions.IsAuthenticated]

#     def post(self, request):
#         data = request.data.copy()
#         data['user'] = request.user.id  # Set user manually

#         serializer = OrderSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.views import exception_handler

class OrderCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data.copy()
        data['user'] = request.user.id

        print("📥 Incoming Order Data:", data)  # log request data

        serializer = OrderSerializer(data=data)
        if serializer.is_valid():
            order = serializer.save()
            print("✅ Order created:", order)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print("❌ Validation Error:", serializer.errors)  # log validation error
        return Response(
            {"error": "Invalid data", "details": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
