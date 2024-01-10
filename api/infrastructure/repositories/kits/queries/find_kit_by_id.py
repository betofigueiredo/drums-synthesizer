from flask_sqlalchemy import SQLAlchemy
from models.kit import Kit


def find_kit_by_id(db: SQLAlchemy, kit_id: str | None) -> Kit | None:
    query = db.select(Kit).where(Kit.id == kit_id)
    user = db.session.scalar(query)
    return user
