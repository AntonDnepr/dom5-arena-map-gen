from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path(settings.ADMIN_URL, admin.site.urls),
    path("api/v0/", include(("apps.core.urls", "core"), namespace="v0")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.SILKY_PROFILER:
    urlpatterns += [path("api/v0/silk/", include("silk.urls", namespace="silk"))]

urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]
