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
    serializer_class = UnitSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["dominion_id", "name"]

    def get_queryset(self):
        mods = self.request.GET.get("modded")
        if mods:
            mods_list = mods.split(",")
            return Unit.objects.filter(modded__in=mods_list)
        return Unit.objects.filter(modded=Unit.VANILLA)


class AutocompleteNationsView(ListAPIView):
    serializer_class = NationSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["dominion_id", "name"]

    def get_queryset(self):
        mods = self.request.GET.get("modded")
        if mods:
            mods_list = mods.split(",")
            return Nation.objects.filter(modded__in=mods_list)
        return Nation.objects.filter(modded=Nation.VANILLA)


@api_view(["POST"])
def generate_map(request):
    serializer = GenerateMapSerializer(data=request.data)
    if serializer.is_valid():
        returned_data = serializer.process_data(serializer.validated_data)
        mapgenerated_text = serializer.data_into_map(returned_data)
        final_map = serializer.substitute(mapgenerated_text)
        return Response(final_map, status=200)
    return Response(serializer.errors, status=400)
