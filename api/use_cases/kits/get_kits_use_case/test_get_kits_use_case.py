import pytest
from use_cases.kits import get_kits_use_case
from infrastructure.repositories.mock.repository_mock import RepositoryMock


class TestGetKitsUseCase:
    # TEST
    def test_get_only_public_kits(self):
        def find_all(user_id: str):
            return []

        repository = RepositoryMock()
        repository.kits.find_all = find_all  # type: ignore

        result = get_kits_use_case(
            user_id=None,
            repository=repository,  # type: ignore
        )

        assert result == {"kits": []}

    # TEST
    def test_get_all_kits(self):
        class Kit:
            id = "2cdaa778-c4c0-4d04-8efa-725f254d4279"
            name = "Bvkery"
            tracks = []

            @property
            def serialized(self):
                return {"id": self.id, "name": self.name, "tracks": self.tracks}

        def find_all(user_id: str):
            return [Kit()]

        repository = RepositoryMock()
        repository.kits.find_all = find_all  # type: ignore

        result = get_kits_use_case(
            user_id=None,
            repository=repository,  # type: ignore
        )

        assert result == {"kits": [Kit().serialized]}
