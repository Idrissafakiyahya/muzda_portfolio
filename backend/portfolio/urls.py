from django.urls import path

from .views import (
    HomeListView,
    AboutListView,
    SkillListView,
    ProjectListView,
    EducationListView,
    FooterListView
)

urlpatterns = [
    path('home/', HomeListView.as_view()),
    path('about/', AboutListView.as_view()),
    path('skills/', SkillListView.as_view()),
    path('projects/', ProjectListView.as_view()),
    path('education/', EducationListView.as_view()),
    path('footer/', FooterListView.as_view()),
]