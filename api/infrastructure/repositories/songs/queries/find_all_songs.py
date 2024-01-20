from typing import List
from sqlalchemy import asc
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import selectinload
from models.song import Song


def find_all_songs(
    db: SQLAlchemy,
    user_id: str | None,
    page: int | None = None,
    per_page: int | None = None,
) -> List[Song]:
    query = (
        (
            db.select(Song)
            .where(Song.user_id == user_id)
            .options(selectinload(Song.kit))
            .order_by(asc(Song.name))
            .limit(per_page)
            .offset((page - 1) * per_page)
        )
        if page and per_page
        else (
            db.select(Song)
            .where(Song.user_id == user_id)
            .options(selectinload(Song.kit))
            .order_by(asc(Song.name))
        )
    )
    songs = db.session.scalars(query)
    return list(songs)
