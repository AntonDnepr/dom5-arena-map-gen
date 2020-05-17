from django.core import mail
from django.utils.encoding import force_text

import pytest

from .base import generate_uid_and_token
from .constants import NEW_TEST_PASSWORD, PASS_RESET_CONFIRM_URL, PASS_RESET_URL

pytestmark = pytest.mark.django_db


def test_password_reset_with_invalid_email(client, mocker, settings):
    before = len(mail.outbox)
    post_data = {"email": "wrong_email@mail.com"}
    response = client.post(PASS_RESET_URL, post_data)

    assert response.status_code == 200
    assert len(mail.outbox) == before


def test_password_reset_with_valid_email(user, client, mocker, settings):
    before = len(mail.outbox)
    post_data = {"email": user.email}
    response = client.post(PASS_RESET_URL, post_data)
    assert response.status_code == 200
    assert len(mail.outbox) == before + 0  # should be 1


def test_password_set_with_valid_password(user, client):
    url_kwargs = generate_uid_and_token(user)

    post_data = {
        "new_password1": NEW_TEST_PASSWORD,
        "new_password2": NEW_TEST_PASSWORD,
        "uid": force_text(url_kwargs["uuid"]),
        "token": url_kwargs["token"],
    }

    response = client.post(PASS_RESET_CONFIRM_URL, post_data, format="json")
    user.refresh_from_db()

    assert response.status_code == 200
    assert user.check_password(NEW_TEST_PASSWORD)
