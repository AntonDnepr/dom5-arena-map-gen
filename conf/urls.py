from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(title="Django template", default_version="v0"),
    public=False,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = (
    path(settings.ADMIN_URL, admin.site.urls),
    path(
        "api/v0/swagger<str:format>/",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "api/v0/swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="swagger",
    ),
    path("api/v0/", include(("apps.core.urls", "core"), namespace="v0")),
    re_path(r"^django-rq/", include("django_rq.urls")),
)
