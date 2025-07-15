from rest_framework import serializers
from .models import ContentSection, ContentBlock
from rest_framework import serializers
from .models import ContentBlock, ContentSection

# class ContentBlockPublicSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ContentBlock
#         fields = ['id', 'title', 'subtitle', 'description', 'icon', 'color']

class ContentBlockPublicSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = ContentBlock
        fields = ['id', 'title', 'subtitle', 'description', 'icon', 'color', 'image']

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url  # fallback in case request is missing
        return None


class ContentSectionPublicSerializer(serializers.ModelSerializer):
    blocks = ContentBlockPublicSerializer(many=True, read_only=True)

    class Meta:
        model = ContentSection
        fields = ['id', 'slug', 'name', 'blocks']
