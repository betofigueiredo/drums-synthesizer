from pydantic import EmailStr
from flask_sqlalchemy import SQLAlchemy
from models.user import User
from infrastructure.repositories.users.queries import (
    create_user,
    find_user_by_email,
    find_user_by_id,
    update_user,
)


class UsersRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_by_id(self, user_id: str | None) -> User:
        return find_user_by_id(db=self.db, user_id=user_id)

    def find_by_email(self, email: EmailStr) -> User:
        return find_user_by_email(db=self.db, email=email)

    def create(self, data: dict[str, str]):
        return create_user(db=self.db, data=data)

    def update(self, user_id: str | None, data: dict[str, str]):
        return update_user(db=self.db, user_id=user_id, data=data)
