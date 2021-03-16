from django.urls import reverse

import pytest

from apps.core.factories import NationFactory, UnitFactory
from apps.core.serializers import (
    GenerateMapSerializer,
    NationSerializer,
    UnitSerializer,
)
from apps.domdata.models import Nation, Unit

pytestmark = pytest.mark.django_db()


@pytest.fixture
def prepare_data():
    UnitFactory.create_batch(50)


def test_autocomplete_units_search_by_dominion_id(prepare_data, client):
    latest_unit = Unit.objects.last()
    url = reverse("v0:autocomplete_units_view") + f"?search={latest_unit.dominion_id}"
    response = client.get(url)
    assert response.status_code == 200
    assert response.data[0] == UnitSerializer(latest_unit).data


def test_autocomplete_units_search_by_name(prepare_data, client):
    latest_unit = Unit.objects.last()
    url = reverse("v0:autocomplete_units_view") + f"?search={latest_unit.name}"
    response = client.get(url)
    assert response.status_code == 200
    assert response.data[0] == UnitSerializer(latest_unit).data


def test_autocomplete_units_search_by_partial_name(prepare_data, client):
    latest_unit = Unit.objects.last()
    url = reverse("v0:autocomplete_units_view") + f"?search={latest_unit.name[:1]}"
    response = client.get(url)
    assert response.status_code == 200
    assert any([obj == UnitSerializer(latest_unit).data for obj in response.data])


def test_autocomplete_nations_search_by_dominion_id(prepare_data, client):
    nation = Nation.objects.last()
    url = reverse("v0:autocomplete_nations_view") + f"?search={nation.dominion_id}"
    response = client.get(url)
    assert response.status_code == 200
    assert response.data[0] == NationSerializer(nation).data


def test_autocomplete_nations_search_by_name(prepare_data, client):
    nation = Nation.objects.last()
    url = reverse("v0:autocomplete_nations_view") + f"?search={nation.name}"
    response = client.get(url)
    assert response.status_code == 200
    assert response.data[0] == NationSerializer(nation).data


def test_autocomplete_nations_search_by_partial_name(prepare_data, client):
    nation = Nation.objects.last()
    url = reverse("v0:autocomplete_nations_view") + f"?search={nation.name[:1]}"
    response = client.get(url)
    assert response.status_code == 200
    assert any([obj == NationSerializer(nation).data for obj in response.data])


def test_generate_map_serializer():
    nation1 = NationFactory(era=1, name="Tir na n'Og")
    nation2 = NationFactory(era=1, name="T'ien Ch'i")
    UnitFactory(dominion_id=1786)
    UnitFactory(dominion_id=7)
    UnitFactory(dominion_id=105)
    UnitFactory(dominion_id=408)
    data = {
        "land_nation_1": "(EA) Tir na n'Og",
        "land_nation_2": "(EA) T'ien Ch'i",
        "water_nation_1": "",
        "water_nation_2": "",
        "commanders": [
            {
                "dominion_id": "1786",
                "name": "Fir Bolg",
                "id": "6a10c26a-96dc-49c4-9663-75151a3a609a",
                "for_nation": "(EA) Tir na n'Og",
                "quantity": 1,
                "magic": {"fire": "2", "blood": "2"},
            },
            {
                "dominion_id": "7",
                "name": "Emerald Guard",
                "id": "02d84d0c-1cbd-41ed-98a6-b5949010155d",
                "for_nation": "(EA) T'ien Ch'i",
                "quantity": 1,
            },
        ],
        "units": [
            {
                "dominion_id": "105",
                "name": "Woodhenge Druid",
                "id": "dc5e61de-3747-46b0-bd33-b361cedc78d9",
                "for_nation": "(EA) Tir na n'Og",
                "quantity": "10",
            },
            {
                "dominion_id": "408",
                "name": "Water Elemental",
                "id": "23925abc-40c0-4feb-9dcd-4b13d4d336a5",
                "for_nation": "(EA) T'ien Ch'i",
                "quantity": "10",
            },
        ],
    }
    serializer = GenerateMapSerializer(data=data)
    assert serializer.is_valid()
    assert (
        serializer.validated_data["land_nation_1"]
        == f"({nation1.get_era_display()}) {nation1.name}"
    )
    assert (
        serializer.validated_data["land_nation_2"]
        == f"({nation2.get_era_display()}) {nation2.name}"
    )
