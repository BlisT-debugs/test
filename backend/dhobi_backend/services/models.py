from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Item(models.Model):
    service = models.ForeignKey(Service, related_name='items', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
