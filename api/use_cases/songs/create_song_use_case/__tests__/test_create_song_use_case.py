import pytest
from use_cases.songs.create_song_use_case import create_song_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from tests.helpers import helpers


class TestCreateSongUseCase:
    # TEST
    def test_invalid_name(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            data={
                "name": "",
                "bpm": 120,
                "blocks": 4,
                "tracks": "1,2,3",
                "kit_id": "1234",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert ": name" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_bpm(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            data={
                "name": "First song",
                "bpm": 0,
                "blocks": 4,
                "tracks": "1,2,3",
                "kit_id": "1234",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert ": bpm" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_blocks(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            data={
                "name": "First song",
                "bpm": 100,
                "blocks": 0,
                "tracks": "1,2,3",
                "kit_id": "1234",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert ": blocks" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_tracks(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            data={
                "name": "First song",
                "bpm": 100,
                "blocks": 4,
                "tracks": "",
                "kit_id": "1234",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert ": tracks" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_kit_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            data={
                "name": "First song",
                "bpm": 100,
                "blocks": 4,
                "tracks": "1,2,3",
                "kit_id": "wrong_kit_id",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_user_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = create_song_use_case(
            user_id="wrong_user_id",
            data={
                "name": "First song",
                "bpm": 100,
                "blocks": 4,
                "tracks": "1,2,3",
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore

    # TEST
    def test_kit_not_found(self):
        def find_kit_by_id(kit_id):
            return None

        repository = RepositoryMock()
        repository.kits.find_by_id = find_kit_by_id  # type: ignore
        utils = Utils()
        result = create_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            data={
                "name": "First song",
                "bpm": 100,
                "blocks": 4,
                "tracks": "1,2,3",
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "KIT_NOT_FOUND"  # type: ignore
        assert result[0].get("message") == "Kit not found."  # type: ignore

    # TEST
    def test_success(self):
        def find_kit_by_id(kit_id):
            return helpers.CreateDotDict({"id": "636800dd-54b8-4284-8904-854fe4f01966"})

        def create_song(data):
            return helpers.CreateDotDict({"id": "1", "created_at": "2024-01-01"})

        repository = RepositoryMock()
        repository.songs.create = create_song  # type: ignore
        repository.kits.find_by_id = find_kit_by_id  # type: ignore
        utils = Utils()
        result = create_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            data={
                "name": "First song",
                "bpm": 100,
                "blocks": 4,
                "tracks": "1,2,3",
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result.get("song") is not None  # type: ignore
