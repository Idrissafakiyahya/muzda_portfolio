from django.contrib import admin

from .models import (
    Home,
    About,
    Skill,
    Project,
    Education,
    Footer,
    Tool   # ✅ IMPORTANT FIX
)

# HOME ADMIN
class HomeAdmin(admin.ModelAdmin):
    list_display = ('title', 'image_tag')

    def has_add_permission(self, request):
        return not Home.objects.exists()


# ABOUT ADMIN
class AboutAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return not About.objects.exists()


# FOOTER ADMIN
class FooterAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return not Footer.objects.exists()


# SKILL ADMIN
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'percentage')
    search_fields = ('name',)


# PROJECT ADMIN
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'github_link', 'live_link')
    search_fields = ('title',)


# EDUCATION ADMIN
class EducationAdmin(admin.ModelAdmin):
    list_display = ('school_name', 'course', 'start_year', 'end_year')
    search_fields = ('school_name', 'course')


# TOOL ADMIN (NEW)
class ToolAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon')
    search_fields = ('name',)


# REGISTER MODELS
admin.site.register(Home, HomeAdmin)
admin.site.register(About, AboutAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Education, EducationAdmin)
admin.site.register(Footer, FooterAdmin)
admin.site.register(Tool, ToolAdmin)