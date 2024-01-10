from flask_restful import request, reqparse, Resource
from infrastructure.utils import Utils
from infrastructure.repositories.repository import Repository
from infrastructure.middlewares.auth_middleware import token_required
from infrastructure.core.database import db
from use_cases.songs import (
    create_song_use_case,
    get_songs_use_case,
    get_song_use_case,
    update_song_use_case,
)


class SongsList(Resource):
    @token_required
    def get(self, token_data):
        user_id = token_data.get("user_id") if token_data else None
        return get_songs_use_case(
            user_id=user_id,
            utils=Utils(),
            repository=Repository(db),
        )

    @token_required
    def post(self, token_data):
        user_id = token_data.get("user_id") if token_data else None
        parser = reqparse.RequestParser()
        parser.add_argument("name", type=str, required=True)
        parser.add_argument("bpm", type=int, required=True)
        parser.add_argument("blocks", type=int, required=True)
        parser.add_argument("tracks", type=str, required=True)
        parser.add_argument("kit_id", type=str, required=True)
        args = parser.parse_args()
        data = {
            "name": args.name,
            "bpm": args.bpm,
            "blocks": args.blocks,
            "tracks": args.tracks,
            "kit_id": args.kit_id,
        }
        return create_song_use_case(
            user_id=user_id,
            data=data,
            utils=Utils(),
            repository=Repository(db),
        )


class Song(Resource):
    @token_required
    def get(self, token_data, song_id):
        user_id = token_data.get("user_id") if token_data else None
        return get_song_use_case(
            user_id=user_id,
            song_id=song_id,
            utils=Utils(),
            repository=Repository(db),
        )

    @token_required
    def put(self, token_data, song_id):
        user_id = token_data.get("user_id") if token_data else None
        parser = reqparse.RequestParser()
        parser.add_argument("name", type=str, required=True)
        parser.add_argument("bpm", type=int, required=True)
        parser.add_argument("blocks", type=int, required=True)
        parser.add_argument("tracks", type=str, required=True)
        parser.add_argument("kit_id", type=str, required=True)
        args = parser.parse_args()
        data = {
            "name": args.name,
            "bpm": args.bpm,
            "blocks": args.blocks,
            "tracks": args.tracks,
            "kit_id": args.kit_id,
        }
        return update_song_use_case(
            user_id=user_id,
            song_id=song_id,
            data=data,
            utils=Utils(),
            repository=Repository(db),
        )


class SongsRoutes:
    def __init__(self, api):
        self.api = api

    def setup(self):
        self.api.add_resource(SongsList, "/songs")
        self.api.add_resource(Song, "/songs/<song_id>")
