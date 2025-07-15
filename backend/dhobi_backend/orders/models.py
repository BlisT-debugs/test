
from django.db import models
from users.models import User

class Order(models.Model):
    STATUS_CHOICES = [
        ('requested', 'Requested'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    SERVICE_CHOICES = [
    ('wash_and_fold', 'Wash & Fold'),
    ('dry_cleaning', 'Dry Cleaning'),
    ('ironing', 'Ironing'),
]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # name = models.CharField(max_length=100)
    name = models.CharField(max_length=100, default='Anonymous')
    phone = models.CharField(max_length=15, default='9999999999')
    service_type = models.CharField(
    max_length=50,
    choices=SERVICE_CHOICES,
    default='wash_and_fold'
)
    total_clothes = models.PositiveIntegerField(default=0)
    pickup_time = models.DateTimeField()
    delivery_time = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='requested')
    special_instructions = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} by {self.name}"
