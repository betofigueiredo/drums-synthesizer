from flask_sqlalchemy import SQLAlchemy
from models.user import User


def find_user_by_id(db: SQLAlchemy, user_id: str | None):
    query = db.select(User).where(User.id == user_id)
    user = db.session.scalar(query)
    return user
