import csv
import os

from apps.domdata.models import Nation, Unit


def parse_units():
    Unit.objects.all().delete()
    Nation.objects.all().delete()
    current_dir = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(current_dir, "csvs/BaseU.csv"), "r", newline="") as csv_file:
        reader = csv.DictReader(csv_file, delimiter="\t")
        unit_list = []
        for row in reader:
            unit_list.append(Unit(name=row["name"], dominion_id=row["id"]))
        Unit.objects.bulk_create(unit_list)
    with open(
        os.path.join(current_dir, "csvs/nations.csv"), "r", newline=""
    ) as csv_file:
        reader = csv.DictReader(csv_file, delimiter="\t")
        nations_list = []
        for row in reader:
            nations_list.append(
                Nation(name=row["name"], dominion_id=row["id"], era=row["era"])
            )
        Nation.objects.bulk_create(nations_list)
    leader_types_files = [
        "csvs/coast_leader_types_by_nation.csv",
        "csvs/fort_leader_types_by_nation.csv",
        "csvs/nonfort_leader_types_by_nation.csv",
    ]
    for filename in leader_types_files:
        with open(os.path.join(current_dir, filename), "r", newline="") as csv_file:
            reader = csv.DictReader(csv_file, delimiter="\t")
            for row in reader:
                nation = Nation.objects.get(dominion_id=row["nation_number"])
                unit = Unit.objects.get(dominion_id=row["monster_number"])
                unit.commander = True
                unit.nations.add(nation)
                unit.save(update_fields=["commander"])

    troop_types_files = [
        "csvs/coast_troop_types_by_nation.csv",
        "csvs/fort_troop_types_by_nation.csv",
        "csvs/nonfort_troop_types_by_nation.csv",
    ]
    for filename in troop_types_files:
        with open(os.path.join(current_dir, filename), "r", newline="") as csv_file:
            reader = csv.DictReader(csv_file, delimiter="\t")
            for row in reader:
                nation = Nation.objects.get(dominion_id=row["nation_number"])
                unit = Unit.objects.get(dominion_id=row["monster_number"])
                unit.nations.add(nation)

    special_troop_file = "csvs/attributes_by_nation.csv"
    commander_attributes_numbers = [
        158,
        159,
        163,
        186,
        295,
        297,
        299,
        301,
        303,
        405,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        149,
    ]
    with open(
        os.path.join(current_dir, special_troop_file), "r", newline=""
    ) as csv_file:
        reader = csv.DictReader(csv_file, delimiter="\t")
        for row in reader:
            nation = Nation.objects.get(dominion_id=row["nation_number"])
            unit = Unit.objects.filter(dominion_id=row["raw_value"]).first()
            if unit:
                if int(row["attribute"]) in commander_attributes_numbers:
                    unit.commander = True
                    unit.save(update_fields=["commander"])
                unit.nations.add(nation)
