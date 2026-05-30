from rest_framework import serializers

from .models import (
    Home,
    About,
    Skill,
    Project,
    Education,
    Footer,
    Tool   # ✅ IMPORTANT FIX
)

# HOME
class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'


# ABOUT
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'


# SKILL
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


# PROJECT
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


# EDUCATION
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


# FOOTER
class FooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = '__all__'


# TOOLS
class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = ['id', 'name', 'icon']