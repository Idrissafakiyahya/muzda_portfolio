"""
Django settings for config project.
"""

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


# =========================
# SECURITY
# =========================
SECRET_KEY = 'django-insecure-1_)5xa42rr@#7iqf^nlu%$@t-p=)4(c00g%juar#kl(*%gwffn'

DEBUG = False

ALLOWED_HOSTS = ["*"]


# =========================
# APPLICATIONS
# =========================
INSTALLED_APPS = [
    "jazzmin",

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',

    'portfolio',
    'dashboard',
]


# =========================
# JAZZMIN (ADMIN UI)
# =========================
JAZZMIN_SETTINGS = {
    "site_title": "Muzdalfah Admin",
    "site_header": "Portfolio Dashboard",
    "site_brand": "Muzdalfah SaaS",
    "welcome_sign": "Welcome back, Admin 👋",

    "show_sidebar": True,
    "navigation_expanded": True,

    "topmenu_links": [
        {"name": "Dashboard", "url": "admin:index"},
    ],

    "icons": {
        "auth": "fas fa-users-cog",
        "portfolio": "fas fa-briefcase",
        "home": "fas fa-home",
        "about": "fas fa-user",
        "skill": "fas fa-code",
        "project": "fas fa-folder-open",
        "education": "fas fa-graduation-cap",
        "footer": "fas fa-envelope",
        "tool": "fas fa-tools",
    },

    "show_ui_builder": True,
}


# =========================
# MIDDLEWARE (FIXED)
# =========================
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',

    'corsheaders.middleware.CorsMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# =========================
# URL / WSGI
# =========================
ROOT_URLCONF = 'config.urls'

WSGI_APPLICATION = 'config.wsgi.application'


# =========================
# TEMPLATES
# =========================
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# =========================
# DATABASE
# =========================
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# =========================
# PASSWORD VALIDATION
# =========================
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# =========================
# INTERNATIONALIZATION
# =========================
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# =========================
# STATIC FILES (FIXED FOR RENDER)
# =========================
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / "staticfiles"

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"


# =========================
# MEDIA FILES
# =========================
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'


# =========================
# CORS
# =========================
CORS_ALLOW_ALL_ORIGINS = True