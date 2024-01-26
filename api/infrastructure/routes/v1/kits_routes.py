from flask_restful import request, reqparse, Resource
from werkzeug.datastructures import FileStorage
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from infrastructure.middlewares.auth_middleware import token_optional, token_required
from infrastructure.core.database import db
from use_cases.kits import (
    create_track_use_case,
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


class Tracks(Resource):
    @token_required
    def post(self, token_data, kit_id):
        user_id = token_data.get("user_id") if token_data else None
        parser = reqparse.RequestParser()
        parser.add_argument("type", type=str, required=True)
        parser.add_argument("name", type=str, required=True)
        parser.add_argument(
            "audio",
            type=FileStorage,
            location="files",
            required=True,
        )
        args = parser.parse_args()
        data = {"name": args.name, "type": args.type, "audio": args.audio}
        return create_track_use_case(
            user_id=user_id,
            kit_id=kit_id,
            data=data,
            utils=Utils(),
            repository=Repository(db),
        )


class KitsRoutes:
    def __init__(self, api):
        self.api = api

    def setup(self):
        self.api.add_resource(KitsList, "/kits")
        self.api.add_resource(Tracks, "/kits/<kit_id>/tracks")
