from django.contrib import admin
from .models import ContentSection, ContentBlock

class ContentBlockInline(admin.TabularInline):
    model = ContentBlock
    extra = 1

@admin.register(ContentSection)
class ContentSectionAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'visible', 'order')
    inlines = [ContentBlockInline]

@admin.register(ContentBlock)
class ContentBlockAdmin(admin.ModelAdmin):
    list_display = ('title', 'section', 'visible', 'order', 'icon', 'color')
