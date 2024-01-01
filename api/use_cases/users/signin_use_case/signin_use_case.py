from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository


def signin_use_case(
    google_token: str,
    utils: Utils,
    repository: Repository,
):
    try:
        google_token_info = utils.tokens.verify_google_token(google_token)

        if google_token_info is None:
            return {
                "code": "INVALID_GOOGLE_TOKEN",
                "message": "Invalid token from Google.",
            }, 400

        email = google_token_info["email"]

        user = repository.users.find_by_email(email=email)

        if not user:
            return {
                "code": "ACCOUNT_DOES_NOT_EXIST",
                "message": "Account does not exist.",
            }, 400

        access_token = utils.tokens.create_access_token(
            user_id=user.id, user_created_at=user.created_at
        )

        return {"access_token": access_token, "user": user.serialized_basic}

    except HTTPException as error:
        return HTTPException(description=str(error))
