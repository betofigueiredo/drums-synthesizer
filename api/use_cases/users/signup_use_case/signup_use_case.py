from flask_restful import HTTPException
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from .schema import Schema


def signup_use_case(
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

        email = google_token_info.get("email")
        name = google_token_info.get("name")
        external_id = google_token_info.get("sub")
        profile_picture = google_token_info.get("picture")

        existing_user = repository.users.find_by_email(email=email)

        if existing_user:
            return {
                "code": "USER_ALREADY_EXISTS",
                "message": "User already exists.",
            }, 400

        new_user = {
            "name": name,
            "email": email,
            "external_id": external_id,
            "profile_picture": profile_picture,
        }

        validation = utils.general.validate_schema(schema=Schema, params=new_user)

        if validation.get("error"):
            return {
                "code": "INVALID_USER_INFORMATION",
                "message": f"{validation.get('error')}: {validation.get('field')}",
            }, 400

        created_user = repository.users.create(data=new_user)

        access_token = utils.tokens.create_access_token(
            user_id=created_user.id, user_created_at=created_user.created_at
        )

        return {"access_token": access_token, "user": created_user.serialized}

    except HTTPException as error:
        return HTTPException(description=str(error))
