import pytest
from use_cases.songs.update_song_use_case import update_song_use_case
from infrastructure.utils import Utils
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from tests.helpers import helpers


class TestUpdateSongUseCase:
    # TEST
    def test_invalid_user_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = update_song_use_case(
            user_id="wrong_user_id",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 4,
                "tracks": '{"id":1}',
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_song_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="wrong_user_id",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 4,
                "tracks": '{"id":1}',
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore

    # TEST
    def test_invalid_name(self):
        repository = RepositoryMock()
        utils = Utils()
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "",
                "bpm": 120,
                "blocks": 4,
                "tracks": '{"id":1}',
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
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 0,
                "blocks": 4,
                "tracks": '{"id":1}',
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
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 0,
                "tracks": '{"id":1}',
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
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
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
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 4,
                "tracks": '{"id":1}',
                "kit_id": "wrong_kit_id",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore

    # TEST
    def test_song_not_found(self):
        def find_song_by_id(song_id):
            return None

        repository = RepositoryMock()
        repository.songs.find_by_id = find_song_by_id  # type: ignore
        utils = Utils()
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 4,
                "tracks": '{"id":1}',
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "SONG_NOT_FOUND"  # type: ignore
        assert result[0].get("message") == "Song not found."  # type: ignore

    # TEST
    def test_song_from_diff_user(self):
        def find_song_by_id(song_id):
            return helpers.CreateDotDict(
                {
                    "id": "62a63fd5-986c-4707-aead-91a6fb79ccde",
                    "user_id": "DIFF_USER_ID",
                }
            )

        def find_kit_by_id(kit_id):
            return None

        repository = RepositoryMock()
        repository.songs.find_by_id = find_song_by_id  # type: ignore
        repository.kits.find_by_id = find_kit_by_id  # type: ignore
        utils = Utils()
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 4,
                "tracks": '{"id":1}',
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "SONG_NOT_FOUND"  # type: ignore
        assert result[0].get("message") == "Song not found."  # type: ignore

    # TEST
    def test_kit_not_found(self):
        def find_song_by_id(song_id):
            return helpers.CreateDotDict(
                {
                    "id": "62a63fd5-986c-4707-aead-91a6fb79ccde",
                    "user_id": "4894f838-3093-40c7-a1e4-1ddcaadf24bb",
                }
            )

        def find_kit_by_id(kit_id):
            return None

        repository = RepositoryMock()
        repository.songs.find_by_id = find_song_by_id  # type: ignore
        repository.kits.find_by_id = find_kit_by_id  # type: ignore
        utils = Utils()
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 4,
                "tracks": '{"id":1}',
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "KIT_NOT_FOUND"  # type: ignore
        assert result[0].get("message") == "Kit not found."  # type: ignore

    # TEST
    def test_success(self):
        def find_song_by_id(song_id):
            return helpers.CreateDotDict(
                {
                    "id": "62a63fd5-986c-4707-aead-91a6fb79ccde",
                    "user_id": "4894f838-3093-40c7-a1e4-1ddcaadf24bb",
                }
            )

        def find_kit_by_id(kit_id):
            return helpers.CreateDotDict({"id": "636800dd-54b8-4284-8904-854fe4f01966"})

        def update_song(song_id, user_id, data):
            return None

        repository = RepositoryMock()
        repository.songs.find_by_id = find_song_by_id  # type: ignore
        repository.kits.find_by_id = find_kit_by_id  # type: ignore
        repository.songs.update = update_song  # type: ignore
        utils = Utils()
        result = update_song_use_case(
            user_id="4894f838-3093-40c7-a1e4-1ddcaadf24bb",
            song_id="62a63fd5-986c-4707-aead-91a6fb79ccde",
            data={
                "name": "My song",
                "bpm": 100,
                "blocks": 4,
                "tracks": '{"b8933af4-4cf0-41ae-b9be-bb42179dcaf9":{"id":"b8933af4-4cf0-41ae-b9be-bb42179dcaf9","order":1,"name":"Crash","type":"CRASH","audio":"/audio/bvkery/crash.wav","volume":1,"muted":false,"steps":""}}',
                "kit_id": "f551219f-da27-4d6d-9d31-907a015a5b45",
            },
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result.get("song") is not None  # type: ignore
