from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'get_items')

    def get_items(self, obj):
        items = obj.items.all()  
        return ", ".join([f"{item.name} (${item.price})" for item in items]) if items else "No Items"

