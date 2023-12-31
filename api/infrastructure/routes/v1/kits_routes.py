from flask_restful import request, reqparse, Resource
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from infrastructure.middlewares.auth_middleware import token_optional
from infrastructure.core.database import db
from use_cases.kits import (
    get_kits_use_case,
)


class KitsList(Resource):
    @token_optional
    def get(self, token_data):
        user_id = token_data.get("user_id") if token_data else None
        return get_kits_use_case(
            user_id=user_id,
            repository=Repository(db),
        )


class KitsRoutes:
    def __init__(self, api):
        self.api = api

    def setup(self):
        self.api.add_resource(KitsList, "/kits")
