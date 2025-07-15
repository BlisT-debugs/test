import firebase_admin
from firebase_admin import auth, credentials
from django.conf import settings
from .models import User

def initialize_firebase():
    cred = credentials.Certificate(settings.FIREBASE_CONFIG)
    firebase_admin.initialize_app(cred)

def verify_firebase_token(id_token):
    try:
        decoded_token = auth.verify_id_token(id_token)
        return decoded_token
    except Exception as e:
        return None

def get_or_create_firebase_user(decoded_token):
    firebase_user = auth.get_user(decoded_token['uid'])
    
    user, created = User.objects.get_or_create(
        email=firebase_user.email,
        defaults={
            'username': firebase_user.email.split('@')[0],
            'first_name': firebase_user.display_name.split()[0] if firebase_user.display_name else '',
            'last_name': ' '.join(firebase_user.display_name.split()[1:]) if firebase_user.display_name else '',
            'phone_number': firebase_user.phone_number if firebase_user.phone_number else '',
            'is_verified': True
        }
    )
    
    # Set required fields that might be missing
    if created:
        user.set_unusable_password()
        user.save()
    
    return user