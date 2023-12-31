from typing import List
from flask_sqlalchemy import SQLAlchemy
from models.song import Song

from infrastructure.repositories.songs.queries import (
    find_all_songs,
)


class SongsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self, user_id: str | None, limit: int | None = None) -> List[Song]:
        return find_all_songs(db=self.db, user_id=user_id, limit=limit)
