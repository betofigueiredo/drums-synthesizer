from pydantic import BaseModel, Field, UUID4


class Schema(BaseModel):
    type: str = Field(min_length=1)
    name: str = Field(min_length=1)
    # audio: str = Field(min_length=1)
    kit_id: UUID4 = Field()
    user_id: UUID4 = Field()
