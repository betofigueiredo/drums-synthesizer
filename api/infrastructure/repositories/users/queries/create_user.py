from flask_sqlalchemy import SQLAlchemy
from models.user import User


def create_user(db: SQLAlchemy, user: User):
    db.session.add(user)
    db.session.commit()
