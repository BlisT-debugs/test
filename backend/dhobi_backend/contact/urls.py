from django.urls import path
from .views import ContactFormView, ContactMessageListView

urlpatterns = [
    path('submit/', ContactFormView.as_view(), name='contact-submit'),
    path('all/', ContactMessageListView.as_view(), name='contact-list'),
]
