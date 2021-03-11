from rest_framework import serializers

from apps.domdata.models import Nation, Unit


class NationSerializer(serializers.ModelSerializer):
    era = serializers.CharField(source="get_era_display")

    class Meta:
        model = Nation
        fields = ["dominion_id", "name", "era"]


class UnitSerializer(serializers.ModelSerializer):
    nations = NationSerializer(many=True)

    class Meta:
        model = Unit
        fields = ["dominion_id", "name", "commander", "nations"]
