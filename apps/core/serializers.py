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


ERAS = {"EA": 1, "MA": 2, "LA": 3}


def nation_exists(value):
    age, nation = value.split(")")
    age = age[1:]
    nation = nation.strip()
    if not Nation.objects.filter(era=ERAS[age], name=nation).exists():
        raise serializers.ValidationError(
            "There is no such nation with name {} in {}".format(nation, age)
        )


def unit_exists(value):
    for instance in value:
        dominion_id = instance["dominion_id"]
        if not Unit.objects.filter(dominion_id=dominion_id).exists():
            raise serializers.ValidationError(
                "There is no such unit with dominion_id {}".format(dominion_id)
            )


class GenerateMapSerializer(serializers.Serializer):
    LAND_STARTS, WATER_STARTS = (5, 8), (12, 14)
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
    commanders = serializers.ListField(required=False, validators=[unit_exists])
    units = serializers.ListField(required=False, validators=[unit_exists])

    def validate(self, data):
        nations_list = [
            data["land_nation_1"],
            data["land_nation_2"],
            data["water_nation_1"],
            data["water_nation_2"],
        ]
        if len(list(filter(lambda x: bool(x), nations_list))) < 2:
            raise serializers.ValidationError("You should select at least 2 nations")
        return data

    def process_data(self, data):
        nations_list = [
            data["land_nation_1"],
            data["land_nation_2"],
            data["water_nation_1"],
            data["water_nation_2"],
        ]
        returned_data = []
        for index, nation in enumerate(nations_list):
            if not bool(nation):
                continue
            units = [x for x in data["units"] if x["for_nation"] == nation]
            commanders = [x for x in data["commanders"] if x["for_nation"] == nation]
            age, nation_name = nation.split(")")
            age = age[1:]
            nation_name = nation_name.strip()
            dominion_id = Nation.objects.get(
                era=ERAS[age], name=nation_name
            ).dominion_id
            land_type = "land" if index < 2 else "water"
            nation_dict = {dominion_id: [], "land_type": land_type}
            for commander in commanders:
                magic = commander.get("magic")
                commander_data = {"units": []}
                if magic:
                    commander_data["magic"] = {}
                    for key, value in magic.items():
                        commander_data["magic"][f"mag_{key.lower()}"] = value
                nation_dict[dominion_id].append(
                    {commander["dominion_id"]: commander_data}
                )
            commander_index, max_index = 0, len(commanders) - 1
            for index, unit in enumerate(units, start=0):
                if index % 3 == 0 and commander_index != max_index:
                    commander_index += 1
                commander_to_append = nation_dict[dominion_id][commander_index]
                commander_id = list(commander_to_append)[0]
                commander_to_append[commander_id]["units"].append(
                    (unit["dominion_id"], unit["quantity"])
                )
            returned_data.append(nation_dict)
        return returned_data

    def data_into_map(self, data):
        order_to_map_position = {
            "land": [self.LAND_STARTS[0], self.LAND_STARTS[1]],
            "water": [self.WATER_STARTS[0], self.WATER_STARTS[1]],
        }
        returned_data = []
        for index, nation_data in enumerate(data):
            nation_id = list(nation_data.keys())[0]
            land_type = nation_data["land_type"]
            final_index = index
            if land_type == "water":
                # This works even for only water and land + water combos, because
                # python lists are supporting negative indexes
                final_index -= 2
            position_on_map = order_to_map_position[land_type][final_index]
            f_string = "\n#allowedplayer {0}\n#specstart {0} {1}\n#setland {1}".format(
                nation_id, position_on_map
            )
            for commander in nation_data[nation_id]:
                for commander_id, commander_data in commander.items():
                    commander_string = "\n#commander {0}".format(commander_id)
                    for units_data in commander_data.get("units", []):
                        unit_id, amount = units_data
                        commander_string += "\n#units {0} {1}".format(amount, unit_id)
                    magic = commander_data.get("magic")
                    if magic:
                        magic_string = "\n#clearmagic"
                        for key, value in magic.items():
                            magic_string += "\n#{0} {1}".format(key, value)
                        commander_string += magic_string
                    f_string += commander_string
            returned_data.append(f_string)
        return returned_data
