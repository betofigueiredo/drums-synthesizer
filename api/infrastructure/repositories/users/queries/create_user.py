from flask_sqlalchemy import SQLAlchemy
from models.user import User


def create_user(db: SQLAlchemy, data: dict[str, str]):
    new_user = User(
        name=data.get("name"),
        email=data.get("email"),
        external_id=data.get("external_id"),
        profile_picture=data.get("profile_picture", ""),
    )
    db.session.add(new_user)
    db.session.flush()
    created_user = new_user
    db.session.commit()
    return created_user
