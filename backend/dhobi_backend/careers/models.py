from django.db import models

# Create your models here.
from django.db import models

class JobApplication(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    position = models.CharField(max_length=100)
    resume = models.FileField(upload_to="resumes/")
    cover_letter = models.TextField(null=True, blank=True)


    def __str__(self):
        return f"{self.name} ({self.email})"



class Job(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    department = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    job_type = models.CharField(max_length=50)  
    salary_range = models.CharField(max_length=50)  
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
