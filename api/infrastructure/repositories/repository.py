from flask_sqlalchemy import SQLAlchemy
from infrastructure.repositories.kits.kits_repository import KitsRepository
from infrastructure.repositories.songs.songs_repository import (
    SongsRepository,
)
from infrastructure.repositories.users.users_repository import UsersRepository


class Repository:
    def __init__(self, db: SQLAlchemy):
        self.kits = KitsRepository(db)
        self.songs = SongsRepository(db)
        self.users = UsersRepository(db)
