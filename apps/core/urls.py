from django.urls import path

from apps.core.views import AutocompleteNationsView, AutocompleteUnitsView, generate_map

urlpatterns = [
    path(
        "autocomplete/units/",
        AutocompleteUnitsView.as_view(),
        name="autocomplete_units_view",
    ),
    path(
        "autocomplete/nations/",
        AutocompleteNationsView.as_view(),
        name="autocomplete_nations_view",
    ),
    path("generate-map/", generate_map, name="generate_map"),
]
