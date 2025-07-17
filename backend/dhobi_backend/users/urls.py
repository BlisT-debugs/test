from django.urls import path
from .views import (
    RegisterView,
    CustomTokenObtainPairView,
    PingView,
    LogoutView,
    FirebaseLoginView,
    truecaller_callback,
    truecaller_status
)

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("ping/", PingView.as_view(), name="ping"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("firebase-auth/", FirebaseLoginView.as_view(), name="firebase_auth"),
    path("auth/truecaller/callback/", truecaller_callback, name="truecaller-callback"),
    path("auth/truecaller/status/", truecaller_status, name="truecaller-status"),
]