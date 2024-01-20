import pytest
from use_cases.songs.get_songs_use_case import get_songs_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from tests.helpers import helpers


class TestGetSongsUseCase:
    # TEST
    def test_invalid_user_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = get_songs_use_case(
            user_id="wrong_user_id",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore
        assert "user_id" in result[0].get("message")  # type: ignore

    # TEST
    def test_success(self):
        def find_all_songs(user_id):
            return [
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "user_id": "2a253332-f9d5-4924-9c80-7856ee71e852",
                }
            ]

        repository = RepositoryMock()
        repository.songs.find_all = find_all_songs  # type: ignore
        utils = Utils()
        result = get_songs_use_case(
            user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result.get("songs") is not None  # type: ignore
