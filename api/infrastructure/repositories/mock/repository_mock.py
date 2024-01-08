from .kits_repository_mock import KitsRepositoryMock
from .songs_repository_mock import SongsRepositoryMock
from .users_repository_mock import UsersRepositoryMock


class RepositoryMock:
    def __init__(self):
        self.kits = KitsRepositoryMock()
        self.songs = SongsRepositoryMock()
        self.users = UsersRepositoryMock()
