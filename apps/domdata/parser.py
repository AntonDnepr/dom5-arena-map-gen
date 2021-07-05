import csv
import glob
import os
import re

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
    # some magic numbers, that I've gotten from searching source of the modinspector
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


def parse_dm_files():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    files_to_parse = glob.glob(os.path.join(current_dir, "mods/*.dm"))
    for dmfile in files_to_parse:
        with open(dmfile, "r") as file_content:
            new_nation, new_monster = False, False
            monster_id, monster_name = "", ""
            nation_id, nation_name, nation_era = "", "", ""
            for line in file_content.readlines():
                if not line.startswith("--"):
                    if "#newmonster" in line:
                        new_nation, new_monster = False, True
                        nation_id, nation_name, nation_era = "", "", ""
                        monster_id = re.findall(r"\d+", line)[0]
                    elif "#selectnation" in line:
                        new_nation, new_monster = True, False
                        monster_id, monster_name = "", ""
                        nation_id = re.findall(r"\d+", line)[0]
                    elif "#end" in line:
                        if new_monster and monster_name:
                            Unit.objects.update_or_create(
                                dominion_id=monster_id, defaults=dict(name=monster_name)
                            )
                        elif new_nation and nation_name:
                            Nation.objects.update_or_create(
                                dominion_id=nation_id,
                                defaults=dict(name=nation_name, era=nation_era),
                            )
                        new_nation, new_monster = False, False
                        monster_id, monster_name = "", ""
                        nation_id, nation_name, nation_era = "", "", ""
                    if new_monster or new_nation:
                        if "#name" in line and "nametype" not in line:
                            name = " ".join(line.split(" ")[1:]).replace('"', "")
                            if new_monster:
                                monster_name = name
                            elif new_nation:
                                nation_name = name
                        elif new_nation and "#era" in line:
                            nation_era = " ".join(line.split(" ")[1:]).replace('"', "")
