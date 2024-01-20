from pydantic import UUID4, BaseModel, Field


class Schema(BaseModel):
    user_id: UUID4 = Field()
