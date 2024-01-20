import pytest
from use_cases.users.get_me_use_case import get_me_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from tests.helpers import helpers


class TestGetMeUseCase:
    # TEST
    def test_invalid_user_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = get_me_use_case(
            user_id="wrong_user_id",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore
        assert "user_id" in result[0].get("message")  # type: ignore

    # TEST
    def test_user_not_found(self):
        def find_user_by_id(user_id):
            return None

        repository = RepositoryMock()
        repository.users.find_by_id = find_user_by_id  # type: ignore
        utils = Utils()
        result = get_me_use_case(
            user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "USER_NOT_FOUND"  # type: ignore
        assert result[0].get("message") == "User does not exist."  # type: ignore

    # TEST
    def test_success(self):
        def find_user_by_id(user_id):
            return helpers.CreateDotDict({"id": "2a253332-f9d5-4924-9c80-7856ee71e852"})

        repository = RepositoryMock()
        repository.users.find_by_id = find_user_by_id  # type: ignore
        utils = Utils()
        result = get_me_use_case(
            user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result.get("user") is not None  # type: ignore
