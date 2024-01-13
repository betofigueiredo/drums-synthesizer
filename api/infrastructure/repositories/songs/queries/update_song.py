from sqlalchemy import update
from flask_sqlalchemy import SQLAlchemy
from models.song import Song


def update_song(
    db: SQLAlchemy,
    song_id: str | None,
    user_id: str | None,
    data: dict[str, str | int],
):
    db.session.execute(
        update(Song)
        .where(Song.id == song_id)
        .where(Song.user_id == user_id)
        .values(data)
    )
    db.session.commit()
