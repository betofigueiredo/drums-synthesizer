from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from .schema import Schema


def create_song_use_case(
    user_id: str | None,
    song: dict[str, str | int],
    utils: Utils,
    repository: Repository,
):
    try:
        new_song = {**song, "user_id": user_id}

        validation = utils.general.validate_schema(schema=Schema, params=new_song)

        if validation.get("error"):
            return {
                "code": "INVALID_DATA",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        created_song = repository.songs.create(data=new_song)

        return {"song": created_song.serialized}

    except HTTPException as error:
        return HTTPException(description=str(error))
