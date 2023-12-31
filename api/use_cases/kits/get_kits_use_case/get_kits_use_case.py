from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository


def get_kits_use_case(
    user_id: str | None,
    repository: Repository,
):
    try:
        kits = repository.kits.find_all(user_id=user_id)

        return {"kits": [kit.serialized for kit in kits]}

    except HTTPException as error:
        return HTTPException(description=str(error))
