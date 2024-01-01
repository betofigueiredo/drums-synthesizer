from pydantic import BaseModel, Field, EmailStr


class Schema(BaseModel):
    name: str = Field(min_length=1)
    email: EmailStr = Field(default=None)
    external_id: str = Field(min_length=1)
    profile_picture: str | None = Field()
