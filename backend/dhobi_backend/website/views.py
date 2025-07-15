from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ContentSection
from .serializers import ContentSectionPublicSerializer
from rest_framework.permissions import AllowAny


class PublicWebsiteContentView(APIView):
    permission_classes = [AllowAny]  

    def get(self, request):
        sections = ContentSection.objects.filter(visible=True).order_by('order')
        serializer = ContentSectionPublicSerializer(
            sections,
            many=True,
            context={'request': request}  
        )
        return Response(serializer.data)

    