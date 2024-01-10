from pydantic import BaseModel, Field, UUID4


class Schema(BaseModel):
    user_id: UUID4 = Field()
    song_id: UUID4 = Field()
