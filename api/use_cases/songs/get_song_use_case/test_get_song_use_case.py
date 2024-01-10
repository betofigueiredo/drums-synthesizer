import pytest
from .get_song_use_case import get_song_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from tests.helpers import helpers


class TestCreateSongUseCase:
    # TEST
    def test_invalid_user_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = get_song_use_case(
            user_id="wrong_user_id",
            song_id="f551219f-da27-4d6d-9d31-907a015a5b45",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore
        assert "user_id" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_song_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = get_song_use_case(
            user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
            song_id="wrong_song_id",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore
        assert "song_id" in result[0].get("message")  # type: ignore

    # TEST
    def test_song_not_found(self):
        def find_song_by_id(song_id):
            return None

        repository = RepositoryMock()
        repository.songs.find_by_id = find_song_by_id  # type: ignore
        utils = Utils()
        result = get_song_use_case(
            user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
            song_id="f551219f-da27-4d6d-9d31-907a015a5b45",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "SONG_NOT_FOUND"  # type: ignore
        assert result[0].get("message") == "Song not found."  # type: ignore

    # TEST
    def test_song_from_another_user(self):
        def find_song_by_id(song_id):
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "user_id": "c4b0aab0-9675-49f9-9e9c-5834910b0dfb",
                }
            )

        repository = RepositoryMock()
        repository.songs.find_by_id = find_song_by_id  # type: ignore
        utils = Utils()
        result = get_song_use_case(
            user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
            song_id="f551219f-da27-4d6d-9d31-907a015a5b45",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "SONG_NOT_FOUND"  # type: ignore
        assert result[0].get("message") == "Song not found."  # type: ignore

    # TEST
    def test_success(self):
        def find_song_by_id(song_id):
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "user_id": "2a253332-f9d5-4924-9c80-7856ee71e852",
                }
            )

        repository = RepositoryMock()
        repository.songs.find_by_id = find_song_by_id  # type: ignore
        utils = Utils()

        result = get_song_use_case(
            user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
            song_id="f551219f-da27-4d6d-9d31-907a015a5b45",
            utils=utils,
            repository=repository,  # type: ignore
        )

        assert result.get("song") is not None  # type: ignore
