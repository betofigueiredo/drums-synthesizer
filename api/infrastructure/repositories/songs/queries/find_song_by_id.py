from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import selectinload
from models.song import Song


def find_song_by_id(db: SQLAlchemy, song_id: str | None) -> Song | None:
    query = db.select(Song).where(Song.id == song_id).options(selectinload(Song.kit))
    user = db.session.scalar(query)
    return user
