from rest_framework import filters
from rest_framework.generics import ListAPIView

from apps.core.serializers import NationSerializer, UnitSerializer
from apps.domdata.models import Nation, Unit


class AutocompleteUnitsView(ListAPIView):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["dominion_id", "name"]


class AutocompleteNationsView(ListAPIView):
    queryset = Nation.objects.all()
    serializer_class = NationSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["dominion_id", "name"]
