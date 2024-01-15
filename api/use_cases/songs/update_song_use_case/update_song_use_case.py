from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from .schema import Schema


def update_song_use_case(
    user_id: str | None,
    song_id: str | None,
    data: dict[str, str | int],
    utils: Utils,
    repository: Repository,
):
    try:
        validation = utils.general.validate_schema(
            schema=Schema, params={**data, "user_id": user_id, "song_id": song_id}
        )

        if validation.get("error"):
            return {
                "code": "INVALID_DATA",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        existing_song = repository.songs.find_by_id(song_id=song_id)

        if not existing_song or existing_song.user_id != user_id:
            return {
                "code": "SONG_NOT_FOUND",
                "message": "Song not found.",
            }, 404

        kit = repository.kits.find_by_id(kit_id=str(data.get("kit_id")))

        if not kit:
            return {
                "code": "KIT_NOT_FOUND",
                "message": "Kit not found.",
            }, 400

        tracks = utils.general.jsonify(data.get("tracks"))

        values_to_update = {**utils.general.only_valid_values(**data), "tracks": tracks}

        repository.songs.update(song_id=song_id, user_id=user_id, data=values_to_update)

        updated_song = {
            **utils.general.only_valid_values(**existing_song.serialized),
            **utils.general.only_valid_values(**data),
            "kit": kit.serialized,
        }

        return {"song": updated_song}

    except HTTPException as error:
        return HTTPException(description=str(error))
