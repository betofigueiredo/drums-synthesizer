from pydantic import BaseModel, Field, UUID4


class Schema(BaseModel):
    name: str = Field(min_length=1)
    user_id: UUID4 = Field()
