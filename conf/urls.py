from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path(settings.ADMIN_URL, admin.site.urls),
    path("api/v0/", include(("apps.core.urls", "core"), namespace="v0")),
]

urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]
