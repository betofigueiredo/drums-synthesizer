from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository


def get_me_use_case(
    user_id: str | None,
    utils: Utils,
    repository: Repository,
):
    try:
        user = repository.users.find_by_id(user_id=user_id)

        if not user:
            return {"message": "User does not exist."}, 404

        return True

    except HTTPException as error:
        return HTTPException(description=str(error))
