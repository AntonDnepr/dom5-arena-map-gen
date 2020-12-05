import csv
import os


def parse_units():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(current_dir, "csvs/BaseU.csv"), "r") as csv_file:
        reader = csv.DictReader(csv_file)
    for line in reader:
        print(line)
