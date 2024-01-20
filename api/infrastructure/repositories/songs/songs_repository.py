from typing import List
from flask_sqlalchemy import SQLAlchemy
from models.song import Song
from infrastructure.repositories.songs.queries import (
    create_song,
    find_all_songs,
    find_song_by_id,
    update_song,
)


class SongsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(
        self, user_id: str | None, page: int | None = None, per_page: int | None = None
    ) -> List[Song]:
        return find_all_songs(db=self.db, user_id=user_id, page=page, per_page=per_page)

    def find_by_id(self, song_id: str | None) -> Song | None:
        return find_song_by_id(db=self.db, song_id=song_id)

    def create(self, data: dict[str, str]):
        return create_song(db=self.db, data=data)

    def update(
        self, song_id: str | None, user_id: str | None, data: dict[str, str | int]
    ):
        return update_song(
            db=self.db,
            song_id=song_id,
            user_id=user_id,
            data=data,
        )
