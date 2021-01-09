from django.urls import path

from apps.core.views import AutocompleteUnitView

urlpatterns = [
    path("autocomplete/", AutocompleteUnitView.as_view(), name="autocompleteview")
]
