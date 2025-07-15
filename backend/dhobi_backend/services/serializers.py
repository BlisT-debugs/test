from rest_framework import serializers
from .models import Service, Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'price']

class ServiceSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta:
        model = Service
        fields = ['id', 'name', 'description', 'items']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        service = Service.objects.create(**validated_data)
        service.items = items_data
        service.save()
        return service
