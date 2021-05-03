from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(title="Dom5 arena map generator", default_version="v0"),
    public=False,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path(settings.ADMIN_URL, admin.site.urls),
    path("api/v0/", include(("apps.core.urls", "core"), namespace="v0")),
]

urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]
