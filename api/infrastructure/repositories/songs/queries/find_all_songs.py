from typing import List
from sqlalchemy import asc
from flask_sqlalchemy import SQLAlchemy
from models.song import Song


def find_all_songs(
    db: SQLAlchemy, user_id: str | None, limit: int | None = None
) -> List[Song]:
    query = (
        (db.select(Song).where(Song.user_id == user_id).limit(limit))
        if limit
        else (db.select(Song).where(Song.user_id == user_id).order_by(asc(Song.name)))
    )
    songs = db.session.scalars(query)
    return list(songs)
