from django.contrib import admin

from .models import Commander, Nation, Unit

admin.site.register(Nation)
admin.site.register(Unit)
admin.site.register(Commander)
