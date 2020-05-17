from typing import Dict

from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from apps.users.models import User


def generate_uid_and_token(user: User) -> Dict[str, str]:
    uuid = urlsafe_base64_encode(force_bytes(user.pk))
    token = default_token_generator.make_token(user)

    return {"uuid": uuid, "token": token}
