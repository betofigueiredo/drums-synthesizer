from pydantic import BaseModel, Field


class Schema(BaseModel):
    user_id: str = Field(None)
