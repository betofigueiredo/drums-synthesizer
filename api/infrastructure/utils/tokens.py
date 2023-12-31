import jwt
from datetime import datetime, timedelta
from google.oauth2 import id_token
from google.auth.transport import requests
from infrastructure.core.settings import settings


class Tokens:
    def create_access_token(self, user_id: str, user_created_at: datetime) -> str:
        payload = {
            "exp": datetime.now() + timedelta(weeks=12),
            "iat": datetime.now(),
            "user_id": user_id,
            "user_created_at": str(user_created_at),
        }
        return jwt.encode(
            payload, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM
        )

    def decode_access_token(self, token: str):
        auth = token.split(maxsplit=2)
        clean_token = auth[1] if auth[0].lower() == "bearer" else auth[0]
        return jwt.decode(
            clean_token,
            settings.JWT_SECRET,
            algorithms=[settings.JWT_ALGORITHM],
            verify=True,
        )

    def verify_google_token(self, token: str):
        try:
            google_token_info = id_token.verify_oauth2_token(
                token, requests.Request(), settings.GOOGLE_AUTH_CLIENT_ID
            )
            return google_token_info
        except ValueError:
            return None
