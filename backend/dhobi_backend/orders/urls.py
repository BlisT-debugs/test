# from rest_framework.routers import DefaultRouter
# from .views import OrderViewSet

# router = DefaultRouter()
# router.register('', OrderViewSet)

# urlpatterns = router.urls


# from django.urls import path
# from .views import OrderCreateView

# urlpatterns = [
#     path('', OrderCreateView.as_view(), name='order-create'),
# ]

from rest_framework.routers import DefaultRouter
from .views import OrderViewSet

router = DefaultRouter()
router.register(r'', OrderViewSet, basename='orders')

urlpatterns = router.urls
