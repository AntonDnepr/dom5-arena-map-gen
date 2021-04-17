from rest_framework import filters
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from apps.core.serializers import (
    GenerateMapSerializer,
    NationSerializer,
    UnitSerializer,
)
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


@api_view(["POST"])
def generate_map(request):
    serializer = GenerateMapSerializer(data=request.data)
    if serializer.is_valid():
        returned_data = serializer.process_data(serializer.validated_data)
        mapgenerated_text = serializer.data_into_map(returned_data)
        final_map = serializer.substitute(mapgenerated_text)
        return Response(final_map, status=200)
    return Response(serializer.errors, status=400)
