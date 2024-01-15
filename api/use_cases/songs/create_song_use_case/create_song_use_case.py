from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from .schema import Schema


def create_song_use_case(
    user_id: str | None,
    data: dict[str, str | int],
    utils: Utils,
    repository: Repository,
):
    try:
        new_song = {**data, "user_id": user_id}

        validation = utils.general.validate_schema(schema=Schema, params=new_song)

        if validation.get("error"):
            return {
                "code": "INVALID_DATA",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        kit = repository.kits.find_by_id(kit_id=new_song.get("kit_id"))

        if not kit:
            return {
                "code": "KIT_NOT_FOUND",
                "message": "Kit not found.",
            }, 400

        tracks = utils.general.jsonify(data.get("tracks"))

        created_song = repository.songs.create(data={**new_song, "tracks": tracks})

        return {"song": created_song.serialized}

    except HTTPException as error:
        return HTTPException(description=str(error))
