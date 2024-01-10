from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from .schema import Schema


def get_song_use_case(
    user_id: str | None,
    song_id: str | None,
    utils: Utils,
    repository: Repository,
):
    try:
        validation = utils.general.validate_schema(
            schema=Schema, params={"user_id": user_id, "song_id": song_id}
        )

        if validation.get("error"):
            return {
                "code": "INVALID_DATA",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        song = repository.songs.find_by_id(song_id=song_id)

        if not song or song.user_id != user_id:
            return {
                "code": "SONG_NOT_FOUND",
                "message": "Song not found.",
            }, 404

        kit = repository.kits.find_by_id(kit_id=song.kit_id)

        if not kit:
            return {
                "code": "KIT_NOT_FOUND",
                "message": "Kit not found for this song.",
            }, 400

        return {"song": {**song.serialized, "kit": kit.serialized}}

    except HTTPException as error:
        return HTTPException(description=str(error))
