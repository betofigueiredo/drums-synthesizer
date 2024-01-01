from .kits_repository_mock import KitsRepositoryMock
from .users_repository_mock import UsersRepositoryMock


class RepositoryMock:
    def __init__(self):
        self.kits = KitsRepositoryMock()
        self.users = UsersRepositoryMock()
