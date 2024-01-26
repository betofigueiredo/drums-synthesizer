from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from .schema import Schema


def create_kit_use_case(
    user_id: str | None,
    name: str,
    utils: Utils,
    repository: Repository,
):
    try:
        new_kit = {"name": name, "user_id": user_id}

        validation = utils.general.validate_schema(schema=Schema, params=new_kit)

        if validation.get("error"):
            return {
                "code": "INVALID_DATA",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        created_kit = repository.kits.create(data=new_kit)

        return {"kit": created_kit.serialized}

    except HTTPException as error:
        return HTTPException(description=str(error))
