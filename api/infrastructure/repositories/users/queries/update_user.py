from sqlalchemy import update
from flask_sqlalchemy import SQLAlchemy
from models.user import User


def update_user(db: SQLAlchemy, user_id: str | None, data: dict[str, str]):
    db.session.execute(update(User).where(User.id == user_id).values(data))
    db.session.commit()
