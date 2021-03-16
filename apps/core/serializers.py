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


def nation_exists(value):
    age, nation = value.split(")")
    age = age[1:]
    nation = nation.strip()
    eras = {"EA": 1, "MA": 2, "LA": 3}
    if not Nation.objects.filter(era=eras[age], name=nation).exists():
        raise serializers.ValidationError("There is no such nation")


class GenerateMapSerializer(serializers.Serializer):
    land_nation_1 = serializers.CharField(
        required=False, validators=[nation_exists], allow_blank=True
    )
    land_nation_2 = serializers.CharField(
        required=False, validators=[nation_exists], allow_blank=True
    )
    water_nation_1 = serializers.CharField(
        required=False, validators=[nation_exists], allow_blank=True
    )
    water_nation_2 = serializers.CharField(
        required=False, validators=[nation_exists], allow_blank=True
    )
    commanders = serializers.ListField(required=False)
    units = serializers.ListField(required=False)
