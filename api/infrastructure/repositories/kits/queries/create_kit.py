from flask_sqlalchemy import SQLAlchemy
from models.kit import Kit


def create_kit(db: SQLAlchemy, data: dict[str, str]):
    new_kit = Kit(
        name=data.get("name"),
        user_id=data.get("user_id"),
    )
    db.session.add(new_kit)
    db.session.flush()
    created_kit = new_kit
    db.session.commit()
    return created_kit
