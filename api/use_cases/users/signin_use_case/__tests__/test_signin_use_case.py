import pytest
from use_cases.users import signin_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock


class TestSigninUseCase:
    # TEST
    def test_invalid_token(self):
        def verify_google_token(google_token: str):
            return None

        repository = RepositoryMock()

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signin_use_case(
            google_token="wrong_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result == (
            {"code": "INVALID_GOOGLE_TOKEN", "message": "Invalid token from Google."},
            400,
        )

    # TEST
    def test_invalid_user(self):
        def verify_google_token(google_token: str):
            return {"email": "email@gmail.com"}

        def find_user_by_email(email: str):
            return None

        repository = RepositoryMock()
        repository.users.find_by_email = find_user_by_email  # type: ignore

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore

        result = signin_use_case(
            google_token="correct_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result == (
            {"code": "ACCOUNT_DOES_NOT_EXIST", "message": "Account does not exist."},
            400,
        )

    # TEST
    def test_success(self):
        class User:
            id = "USER_ID"
            created_at = "CREATED_AT"

            @property
            def serialized(self):
                return {"id": "USER_ID"}

        def verify_google_token(google_token: str):
            return {"email": "email@gmail.com"}

        def find_user_by_email(email: str):
            return User()

        def create_access_token(user_id: str, user_created_at: str):
            return "ACCESS_TOKEN"

        repository = RepositoryMock()
        repository.users.find_by_email = find_user_by_email  # type: ignore

        utils = Utils()
        utils.tokens.verify_google_token = verify_google_token  # type: ignore
        utils.tokens.create_access_token = create_access_token  # type: ignore

        result = signin_use_case(
            google_token="correct_token",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result == {
            "access_token": "ACCESS_TOKEN",
            "user": User().serialized,
        }
