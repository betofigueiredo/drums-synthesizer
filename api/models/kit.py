import uuid
from sqlalchemy.orm import relationship
from infrastructure.core.database import db
from .track import Track


class Kit(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    name = db.Column(db.String(256))
    tracks = relationship("Track", back_populates="kit", lazy="subquery")
    songs = relationship("Song", back_populates="kit", lazy="subquery")
    user_id = db.Column(db.String(36), db.ForeignKey("user.id"), nullable=True)
    user = relationship("User", back_populates="kits", lazy="subquery")

    @property
    def serialized(self):
        return {
            "id": self.id,
            "name": self.name,
            "tracks": [track.serialized for track in self.tracks],
        }
