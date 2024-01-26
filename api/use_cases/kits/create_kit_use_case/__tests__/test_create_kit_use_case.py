import pytest
from use_cases.kits.create_kit_use_case import create_kit_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from tests.helpers import helpers


class TestCreateKitUseCase:
    # TEST
    def test_invalid_name(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_kit_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            name="",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert ": name" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_user_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_kit_use_case(
            user_id="wrong_user_id",
            name="Kit's name",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore

    # TEST
    def test_success(self):
        def create_kit(data):
            return helpers.CreateDotDict({"id": "1", "created_at": "2024-01-01"})

        repository = RepositoryMock()
        repository.kits.create = create_kit  # type: ignore
        utils = Utils()
        result = create_kit_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            name="Kit's name",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result.get("kit") is not None  # type: ignore
