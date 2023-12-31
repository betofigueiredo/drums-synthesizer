from pydantic import EmailStr
from flask_sqlalchemy import SQLAlchemy
from models.user import User


def find_user_by_email(db: SQLAlchemy, email: EmailStr):
    query = db.select(User).where(User.email == email)
    user = db.session.scalar(query)
    return user
