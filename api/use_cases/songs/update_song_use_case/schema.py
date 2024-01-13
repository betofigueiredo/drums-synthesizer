from pydantic import BaseModel, Field, UUID4


class Schema(BaseModel):
    name: str = Field(min_length=1)
    bpm: int = Field(gt=0)
    blocks: int = Field(gt=0)
    tracks: str = Field(min_length=1)
    kit_id: UUID4 = Field()
    user_id: UUID4 = Field()
    song_id: UUID4 = Field()
