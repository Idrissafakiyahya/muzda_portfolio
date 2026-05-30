from rest_framework import generics

from .models import (
    Home,
    About,
    Skill,
    Project,
    Education,
    Footer
)

from .serializers import (
    HomeSerializer,
    AboutSerializer,
    SkillSerializer,
    ProjectSerializer,
    EducationSerializer,
    FooterSerializer
)


# HOME
class HomeListView(generics.ListAPIView):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer


# ABOUT
class AboutListView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


# SKILLS
class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


# PROJECTS
class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


# EDUCATION
class EducationListView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


# FOOTER
class FooterListView(generics.ListAPIView):
    queryset = Footer.objects.all()
    serializer_class = FooterSerializer