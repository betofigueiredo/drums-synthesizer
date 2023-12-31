from typing import List
from flask_sqlalchemy import SQLAlchemy
from models.song import Song

from infrastructure.repositories.songs.queries import (
    create_song,
    find_all_songs,
)


class SongsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self, user_id: str | None, limit: int | None = None) -> List[Song]:
        return find_all_songs(db=self.db, user_id=user_id, limit=limit)

    def create(self, data: dict[str, str]):
        return create_song(db=self.db, data=data)
