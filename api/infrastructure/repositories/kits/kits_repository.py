from typing import List
from flask_sqlalchemy import SQLAlchemy
from models.kit import Kit
from .queries import find_all_kits, find_kit_by_id


class KitsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self, user_id: str | None) -> List[Kit]:
        return find_all_kits(db=self.db, user_id=user_id)

    def find_by_id(self, kit_id: str | None) -> Kit | None:
        return find_kit_by_id(db=self.db, kit_id=kit_id)
