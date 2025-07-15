from django.urls import path
from .views import JobApplicationView, JobListView

urlpatterns = [
    path('apply/', JobApplicationView.as_view(), name='job-apply'),
    path('jobs/', JobListView.as_view(), name='job-list'),

]
