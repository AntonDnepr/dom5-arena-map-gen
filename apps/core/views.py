from rest_framework import filters
from rest_framework.generics import ListAPIView

from apps.core.serializers import UnitSerializer
from apps.domdata.models import Unit


class AutocompleteUnitView(ListAPIView):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["dominion_id", "name"]
