from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny  
from .serializers import JobApplicationSerializer
from rest_framework import generics, permissions
from .models import Job
from .serializers import JobSerializer

class JobApplicationView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [AllowAny] 

    def post(self, request, format=None):
        serializer = JobApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Application submitted successfully"}, status=status.HTTP_201_CREATED)
    
        print("Validation errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class JobListView(generics.ListAPIView):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
    permission_classes = [permissions.AllowAny] 
