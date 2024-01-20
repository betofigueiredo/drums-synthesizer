from pydantic import BaseModel, Field, UUID4


# class TrackSchema(BaseModel):
#     model_config = ConfigDict(strict=True)

#     id: UUID4 = Field()
#     order: int = Field()
#     name: str = Field(min_length=1)
#     type: str = Field(min_length=1)
#     audio: str = Field(min_length=1)
#     volume: int = Field(gt=0)
#     muted: bool = Field()
#     steps: str = Field()


# class TracksSchema(BaseModel):
#     RootModel: Dict[str, TrackSchema]


class Schema(BaseModel):
    name: str = Field(min_length=1)
    bpm: int = Field(gt=0)
    blocks: int = Field(gt=0)
    tracks: str = Field(min_length=1)
    kit_id: UUID4 = Field()
    user_id: UUID4 = Field()
    song_id: UUID4 = Field()
