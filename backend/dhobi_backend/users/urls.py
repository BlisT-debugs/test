from django.urls import path
from .views import RegisterView, CustomTokenObtainPairView, PingView, LogoutView
from .views import FirebaseLoginView
from .views import truecaller_callback
from .views import truecaller_callback, truecaller_status

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('ping/', PingView.as_view(), name='ping'),  # test route
    path('logout/', LogoutView.as_view(), name='logout'),  
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('firebase-auth/', FirebaseLoginView.as_view(), name='firebase_auth'),
    path('truecaller/callback/', truecaller_callback),
    path("auth/truecaller/status/", truecaller_status),
]
