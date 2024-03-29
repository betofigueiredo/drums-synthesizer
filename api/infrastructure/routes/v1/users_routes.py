from flask_restful import request, reqparse, Resource
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from infrastructure.middlewares.auth_middleware import token_required
from infrastructure.core.database import db
from use_cases.users import (
    get_me_use_case,
    signin_use_case,
    signup_use_case,
)


class SignUp(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("google_token", type=str, required=True)
        args = parser.parse_args()
        return signup_use_case(
            google_token=args.google_token,
            utils=Utils(),
            repository=Repository(db),
        )


class SignIn(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("google_token", type=str, required=True)
        args = parser.parse_args()
        return signin_use_case(
            google_token=args.google_token,
            utils=Utils(),
            repository=Repository(db),
        )


class GetMe(Resource):
    @token_required
    def get(self, token_data):
        user_id = token_data.get("user_id") if token_data else None
        return get_me_use_case(
            user_id=user_id,
            utils=Utils(),
            repository=Repository(db),
        )


class UsersRoutes:
    def __init__(self, api):
        self.api = api

    def setup(self):
        self.api.add_resource(SignUp, "/users/signup")
        self.api.add_resource(SignIn, "/users/signin")
        self.api.add_resource(GetMe, "/users/me")
