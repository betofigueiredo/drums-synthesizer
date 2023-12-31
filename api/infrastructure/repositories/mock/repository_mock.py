from .kits_repository_mock import KitsRepositoryMock


class RepositoryMock:
    def __init__(self):
        self.kits = KitsRepositoryMock()
