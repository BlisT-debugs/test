# website/urls.py

from django.urls import path

from .views import PublicWebsiteContentView


urlpatterns = [
        path('website-content/', PublicWebsiteContentView.as_view(), name='public-website-content'),

]
