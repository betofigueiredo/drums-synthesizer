from typing import Literal
from functools import wraps
from flask_restful import request
from infrastructure.utils import Utils


def token_required(f):
    @wraps(f)
    def decorated(self, *args, **kwargs) -> tuple[dict[str, str], Literal[401]]:
        utils = Utils()
        token = None

        if "Authorization" in request.headers:
            token = request.headers["Authorization"].split(" ")[1]

        if not token:
            return {
                "message": "Authentication token is missing.",
                "error": "Unauthorized",
            }, 401

        try:
            token_data = utils.tokens.decode_access_token(token=token)
        except Exception as error:
            return {
                "message": "You are not logged.",
                "error": str(error),
            }, 401

        return f(self, token_data, *args, **kwargs)

    return decorated


def token_optional(f):
    @wraps(f)
    def decorated(self, *args, **kwargs) -> tuple[dict[str, str], Literal[401]]:
        utils = Utils()
        token = None

        if "Authorization" in request.headers:
            token = request.headers["Authorization"].split(" ")[1]

        if not token:
            return f(self, {}, *args, **kwargs)

        try:
            token_data = utils.tokens.decode_access_token(token=token)
        except Exception as error:
            return f(self, {}, *args, **kwargs)

        return f(self, token_data, *args, **kwargs)

    return decorated
