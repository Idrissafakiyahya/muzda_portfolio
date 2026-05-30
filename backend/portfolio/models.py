from django.db import models


class Home(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.TextField()
    profile_image = models.ImageField(upload_to='home/')

    def __str__(self):
        return self.title

    def image_tag(self):
        from django.utils.html import mark_safe

        return mark_safe(
            f'<img src="{self.profile_image.url}" width="100" />'
        )

    image_tag.short_description = 'Profile Image'

class About(models.Model):
    description = models.TextField()
    image = models.ImageField(upload_to='about/', null=True, blank=True)  # ⭐ NEW FIELD

    def __str__(self):
        return "About Section"

# SKILLS SECTION
class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.IntegerField()

    def __str__(self):
        return self.name





class Tool(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50)  # mfano: "FaPython"
    def __str__(self):
        return self.name

# PROJECTS SECTION
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    github_link = models.URLField()
    live_link = models.URLField()

    def __str__(self):
        return self.title


# EDUCATION SECTION
class Education(models.Model):
    school_name = models.CharField(max_length=200)
    course = models.CharField(max_length=200)

    start_year = models.IntegerField()
    end_year = models.IntegerField()

    description = models.TextField()

    def __str__(self):
        return self.school_name


# FOOTER SECTION
class Footer(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    github = models.URLField()
    linkedin = models.URLField()
    instagram = models.URLField()

    copyright_text = models.CharField(max_length=200)

    def __str__(self):
        return self.email