import uuid
from sqlalchemy.sql.functions import now
from sqlalchemy.orm import relationship
from infrastructure.core.database import db


class User(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    external_id = db.Column(db.String(100), nullable=True)
    name = db.Column(db.String(256), nullable=False)
    email = db.Column(db.String(256), index=True, nullable=False, unique=True)
    profile_picture = db.Column(db.String(256), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=now())
    songs = relationship("Song", back_populates="user", lazy="subquery")
    kits = relationship("Kit", back_populates="user", lazy="subquery")

    @property
    def serialized(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "profile_picture": self.profile_picture,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at) if self.updated_at else None,
        }
