from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'status')
    search_fields = ('user__username', 'status')
    list_filter = ('status', 'created_at')
    #view orders
    def view_order(self, request, queryset):
        return queryset.count()
    view_order.short_description = "View Order"
    