from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from .schema import Schema


def get_songs_use_case(
    user_id: str | None,
    utils: Utils,
    repository: Repository,
):
    try:
        utils.general.validate_schema(
            schema=Schema,
            params={"user_id": user_id},
        )

        return []

    except HTTPException as error:
        return HTTPException(description=str(error))
