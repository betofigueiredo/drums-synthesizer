from typing import List
from sqlalchemy import asc
from flask_sqlalchemy import SQLAlchemy
from models.kit import Kit


def find_all_kits(db: SQLAlchemy, user_id: str | None) -> List[Kit]:
    query = (
        (
            db.select(Kit)
            .where((Kit.user_id == user_id) | (Kit.user_id.is_(None)))
            .order_by(asc(Kit.name))
        )
        if user_id
        else (db.select(Kit).where(Kit.user_id.is_(None)).order_by(asc(Kit.name)))
    )
    kits = db.session.scalars(query)
    return list(kits)
