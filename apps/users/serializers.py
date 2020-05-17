from django.conf import settings
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.password_validation import validate_password

from rest_auth.serializers import PasswordResetSerializer
from rest_framework import serializers
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    TokenRefreshSerializer,
    TokenVerifySerializer,
)
from rest_framework_simplejwt.tokens import RefreshToken, UntypedToken

from .constants.messages import (
    INVALID_TOKEN_MESSAGE,
    REQUIRED_FLAG_MESSAGE,
    UNIQUE_EMAIL_MESSAGE,
)
from .models import User


class CustomPasswordResetForm(PasswordResetForm):
    """
    Default form was customized to create an RefreshToken object
    during saving and update templates
    """

    def save(
        self,
        domain_override=None,
        subject_template_name=None,
        email_template_name=None,
        use_https=False,
        token_generator=None,
        from_email=None,
        request=None,
        html_email_template_name=None,
        extra_email_context=None,
    ):
        """
        Generate a one-use only link for resetting password and send it to the
        user.
        """
        user = User.objects.filter(
            email=self.cleaned_data["email"], is_active=True
        ).first()
        if user:
            # TODO: we need to send mail here
            pass


class CustomPasswordResetSerializer(PasswordResetSerializer):
    """
    Default serializer was customized to change form class
    """

    password_reset_form_class = CustomPasswordResetForm


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """ CustomTokenObtainPairSerializer is designed to add the user security_hash
        to token attributes and return additional data with token data
    """

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["security_hash"] = str(user.security_hash)
        return token


def validate_token_by_security_hash(token: UntypedToken):
    """ Сhecks if the user security_hash is equal to the security_hash from the token
    """
    user = User.objects.get(id=token["user_id"])
    if str(user.security_hash) != token["security_hash"]:
        raise serializers.ValidationError(INVALID_TOKEN_MESSAGE)
    return


class CustomTokenVerifySerializer(TokenVerifySerializer):
    """ CustomTokenVerifySerializer is designed to configure the validate
        method and verify the token by user security_hash
    """

    def validate(self, attrs):
        token = UntypedToken(attrs["token"])
        validate_token_by_security_hash(token)
        return {}


class CustomTokenRefreshSerializer(TokenRefreshSerializer):
    """ CustomTokenRefreshSerializer is designed to configure the validate
        method and verify the token by user security_hash
    """

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = RefreshToken(attrs["refresh"])
        validate_token_by_security_hash(refresh)
        return data


class BaseUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=100)

    class Meta:
        model = User
        fields = ["email"]

    def validate_email(self, data: str) -> str:
        data = data.lower()
        if User.objects.filter(email=data).exists():
            raise serializers.ValidationError(UNIQUE_EMAIL_MESSAGE)
        return data


class UserDetailSerializer(BaseUserSerializer):
    first_name = serializers.CharField(max_length=256, required=False)
    last_name = serializers.CharField(max_length=256, required=False)
    email = serializers.EmailField(read_only=True)
    admin_url = serializers.SerializerMethodField()

    class Meta(BaseUserSerializer.Meta):
        fields = BaseUserSerializer.Meta.fields + [
            "first_name",
            "last_name",
            "admin_url",
        ]

    def get_admin_url(self, instance):
        if instance.is_staff or instance.is_superuser:
            return settings.ADMIN_URL
        return None


class UserRegistrationSerializer(BaseUserSerializer):
    """ User registration serializer
    """

    access = serializers.SerializerMethodField(
        read_only=True, method_name="get_access_token"
    )
    refresh = serializers.SerializerMethodField(
        read_only=True, method_name="get_refresh_token"
    )
    first_name = serializers.CharField(max_length=256, required=True)
    last_name = serializers.CharField(max_length=256, required=True)
    password = serializers.CharField(write_only=True)
    privacy_policy = serializers.BooleanField(required=True, write_only=True)

    class Meta(BaseUserSerializer.Meta):
        fields = BaseUserSerializer.Meta.fields + [
            "access",
            "refresh",
            "first_name",
            "last_name",
            "password",
            "privacy_policy",
        ]

    def get_access_token(self, user: User) -> str:
        refresh_token = RefreshToken.for_user(user)
        return str(refresh_token.access_token)

    def get_refresh_token(self, user: User) -> str:
        refresh_token = RefreshToken.for_user(user)
        return str(refresh_token)

    def validate_privacy_policy(self, data: bool) -> bool:
        if not data:
            raise serializers.ValidationError(REQUIRED_FLAG_MESSAGE)
        return data

    def validate_password(self, data: str) -> str:
        validate_password(data)
        return data

    def create(self, validated_data):
        email = validated_data.get("email")
        user = User.objects.create(
            privacy_policy=validated_data.get("privacy_policy"),
            first_name=validated_data.get("first_name"),
            last_name=validated_data.get("last_name"),
            email=email,
            username=email,
            is_active=False,
        )
        user.set_password(validated_data.get("password"))
        user.save()
        return user
