from flask_sqlalchemy import SQLAlchemy
from models.song import Song


def create_song(db: SQLAlchemy, data: dict[str, str]):
    new_song = Song(
        name=data.get("name"),
        bpm=data.get("bpm"),
        blocks=data.get("blocks"),
        tracks=data.get("tracks"),
        kit_id=data.get("kit_id"),
        user_id=data.get("user_id"),
    )
    db.session.add(new_song)
    db.session.flush()
    created_song = new_song
    db.session.commit()
    return created_song
