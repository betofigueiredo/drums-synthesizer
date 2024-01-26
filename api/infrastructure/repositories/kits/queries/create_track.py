from flask_sqlalchemy import SQLAlchemy
from models.track import Track


def create_track(db: SQLAlchemy, data: dict[str, str]):
    new_track = Track(
        name=data.get("name"),
        user_id=data.get("user_id"),
    )
    db.session.add(new_track)
    db.session.flush()
    created_track = new_track
    db.session.commit()
    return created_track
