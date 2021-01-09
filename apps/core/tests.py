from django.urls import reverse

import pytest

from apps.core.factories import UnitFactory
from apps.core.serializers import UnitSerializer
from apps.domdata.models import Unit

pytestmark = pytest.mark.django_db()


@pytest.fixture
def prepare_data():
    UnitFactory.create_batch(50)


def test_autocomplete_search_by_dominion_id(prepare_data, client):
    latest_unit = Unit.objects.last()
    url = reverse("v0:autocompleteview") + f"?search={latest_unit.dominion_id}"
    response = client.get(url)
    assert response.status_code == 200
    assert response.data[0] == UnitSerializer(latest_unit).data


def test_autocomplete_search_by_name(prepare_data, client):
    latest_unit = Unit.objects.last()
    url = reverse("v0:autocompleteview") + f"?search={latest_unit.name}"
    response = client.get(url)
    assert response.status_code == 200
    assert response.data[0] == UnitSerializer(latest_unit).data


def test_autocomplete_search_by_partial_name(prepare_data, client):
    latest_unit = Unit.objects.last()
    url = reverse("v0:autocompleteview") + f"?search={latest_unit.name[:1]}"
    response = client.get(url)
    assert response.status_code == 200
    assert any([obj == UnitSerializer(latest_unit).data for obj in response.data])
