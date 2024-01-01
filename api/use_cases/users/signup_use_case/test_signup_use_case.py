import pytest
from use_cases.users import signup_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from tests.helpers import helpers


class TestSignupUseCase:
    # TEST
    def test_invalid_token(self):
        def verify_google_token(google_token: str):
            return None

        repository = RepositoryMock()

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signup_use_case(
            google_token="wrong_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result == (
            {"code": "INVALID_GOOGLE_TOKEN", "message": "Invalid token from Google."},
            400,
        )

    # TEST
    def test_user_already_exists(self):
        def verify_google_token(google_token: str):
            return {
                "name": "Test",
                "email": "beto@gmail.com",
                "sub": "",
                "picture": "",
            }

        def find_user_by_email(email: str):
            return True

        repository = RepositoryMock()
        repository.users.find_by_email = find_user_by_email  # type: ignore

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signup_use_case(
            google_token="correct_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result == (
            {"code": "USER_ALREADY_EXISTS", "message": "User already exists."},
            400,
        )

    # TEST
    def test_invalid_user_name(self):
        def verify_google_token(google_token: str):
            return {
                "name": None,
                "email": "beto@test.com",
                "sub": "1234",
                "picture": None,
            }

        def find_user_by_email(email: str):
            return None

        repository = RepositoryMock()
        repository.users.find_by_email = find_user_by_email  # type: ignore

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signup_use_case(
            google_token="correct_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result == (
            {
                "code": "INVALID_USER_INFORMATION",
                "message": "Input should be a valid string: name",
            },
            400,
        )

    # TEST
    def test_invalid_user_email(self):
        def verify_google_token(google_token: str):
            return {
                "name": "Beto",
                "email": "invalid_email",
                "sub": "1234",
                "picture": None,
            }

        def find_user_by_email(email: str):
            return None

        repository = RepositoryMock()
        repository.users.find_by_email = find_user_by_email  # type: ignore

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signup_use_case(
            google_token="correct_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result[0].get("code") == "INVALID_USER_INFORMATION"  # type: ignore
        assert "value is not a valid email address" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_user_external_id(self):
        def verify_google_token(google_token: str):
            return {
                "name": "Beto",
                "email": "beto@test.com",
                "sub": None,
                "picture": None,
            }

        def find_user_by_email(email: str):
            return None

        repository = RepositoryMock()
        repository.users.find_by_email = find_user_by_email  # type: ignore

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signup_use_case(
            google_token="correct_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result == (
            {
                "code": "INVALID_USER_INFORMATION",
                "message": "Input should be a valid string: external_id",
            },
            400,
        )

    # TEST
    def test_success(self):
        def verify_google_token(google_token: str):
            return {
                "name": "Beto",
                "email": "beto@test.com",
                "sub": "1234",
                "picture": None,
            }

        def find_user_by_email(email: str):
            return None

        def create_user(data):
            return helpers.CreateDotDict({"id": "1", "created_at": "2024-01-01"})

        repository = RepositoryMock()
        repository.users.find_by_email = find_user_by_email  # type: ignore
        repository.users.create = create_user  # type: ignore

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signup_use_case(
            google_token="correct_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result.get("access_token") is not None  # type: ignore
        assert result.get("user") is not None  # type: ignore
