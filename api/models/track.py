import uuid
from sqlalchemy.orm import relationship
from infrastructure.core.database import db


class Track(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    type = db.Column(db.String(256))
    name = db.Column(db.String(256))
    audio = db.Column(db.String(256))
    kit_id = db.Column(db.String(36), db.ForeignKey("kit.id"))
    kit = relationship("Kit", back_populates="tracks", lazy="subquery")

    @property
    def serialized(self):
        return {
            "id": self.id,
            "type": self.type,
            "name": self.name,
            "audio": self.audio,
        }
