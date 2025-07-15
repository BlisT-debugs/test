from django.db import models

class ContentSection(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    visible = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class ContentBlock(models.Model):
    section = models.ForeignKey('ContentSection', related_name='blocks', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=100, blank=True)  # e.g. FaGem
    color = models.CharField(max_length=100, blank=True)  # e.g. text-cyan-700
    # image = models.ImageField(upload_to='content_images/', blank=True, null=True)
    image = models.ImageField(upload_to='content_images/', blank=True, null=True)

    visible = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title
