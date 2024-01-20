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
        validation = utils.general.validate_schema(
            schema=Schema, params={"user_id": user_id}
        )

        if validation.get("error"):
            return {
                "code": "INVALID_DATA",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        songs = repository.songs.find_all(user_id=user_id)

        return {"songs": [song.serialized for song in songs]}

    except HTTPException as error:
        return HTTPException(description=str(error))
