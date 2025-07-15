from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import JobApplication
from .models import Job

admin.site.register(JobApplication)

admin.site.register(Job)
