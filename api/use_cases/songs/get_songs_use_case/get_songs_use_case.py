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
        return []

    except HTTPException as error:
        return HTTPException(description=str(error))
