from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from infrastructure.core.constants import constants
from .schema import Schema


def create_track_use_case(
    user_id: str | None,
    kit_id: str | None,
    data: dict[str, str | int],
    utils: Utils,
    repository: Repository,
):
    try:
        new_track = {**data, "user_id": user_id, "kit_id": kit_id}

        validation = utils.general.validate_schema(schema=Schema, params=new_track)

        if validation.get("error"):
            return {
                "code": "INVALID_DATA",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        # type_already_exists = getattr(constants.tracks_types, str(data.get("type")))
        # if type_already_exists:
        #     return {
        #         "code": "INVALID_DATA",
        #         "message": f"Invalid track type: {data.get('type')}",
        #     }, 400

        # TODO: check if kit exists and belongs to the user

        # TODO: upload audio file
        audio_url = ""

        created_track = repository.kits.create_track(
            data={**new_track, "audio": audio_url}
        )

        return {"track": created_track.serialized}

    except HTTPException as error:
        return HTTPException(description=str(error))
