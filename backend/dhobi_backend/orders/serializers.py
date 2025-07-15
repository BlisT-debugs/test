from rest_framework import serializers
from .models import Order 

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            'id', 'user', 'name', 'phone', 'service_type', 'total_clothes',
            'pickup_time', 'delivery_time', 'status', 'special_instructions', 'created_at'
        ]
        read_only_fields = ['id', 'status', 'created_at', 'user']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)