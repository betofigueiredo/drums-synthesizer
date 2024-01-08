import uuid
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import SMALLINT, JSON
from infrastructure.core.database import db


class Song(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    name = db.Column(db.String(256))
    bpm = db.Column(SMALLINT)
    blocks = db.Column(SMALLINT)
    tracks = db.Column(JSON)
    kit_id = db.Column(db.String(36))
    user_id = db.Column(db.String(36), db.ForeignKey("user.id"))
    user = relationship("User", back_populates="songs", lazy="subquery")

    @property
    def serialized(self):
        return {
            "id": self.id,
            "name": self.name,
            "bpm": self.bpm,
            "blocks": self.blocks,
            "tracks": self.tracks,
            "kit_id": self.kit_id,
        }
