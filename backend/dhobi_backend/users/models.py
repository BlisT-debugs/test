from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USER_TYPES = (
        ('CUSTOMER', 'Customer'),
        ('STAFF', 'Staff'),
        ('ADMIN', 'Admin'),
    )

    # Add Truecaller-specific fields
    truecaller_id = models.CharField(max_length=255, null=True, blank=True, unique=True)
    is_truecaller_verified = models.BooleanField(default=False)
    
    # Personal Info
    first_name = models.CharField(max_length=30, blank=False)  # Make required
    last_name = models.CharField(max_length=30, blank=False)   # Make required
    phone_number = models.CharField(max_length=15, unique=True)
    
    # Address Info
    address_line1 = models.CharField(max_length=100, blank=False)
    address_line2 = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=50, blank=False)
    state = models.CharField(max_length=50, blank=False)
    postal_code = models.CharField(max_length=10, blank=False)
    country = models.CharField(max_length=50, default="India")
    
    # not mandatory during signup/signin
    user_type = models.CharField(max_length=10, choices=USER_TYPES, default='CUSTOMER')
    profile_picture = models.URLField(null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    preferred_payment_method = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return f"{self.get_full_name()} ({self.user_type})"
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"