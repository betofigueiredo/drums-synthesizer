from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api
from infrastructure.core.settings import settings
from infrastructure.core.database import db
from infrastructure.routes.v1.routes import setup_routes
from infrastructure.core.logger_config import send_log


app = Flask(__name__)

cors = CORS(
    app,
    resources={r"/*": {"origins": ["http://localhost:5050", "https://drum.me"]}},
)

app.config["SQLALCHEMY_DATABASE_URI"] = settings.DB_URL

api = Api(app, prefix=settings.API_V1_PREFIX)
health_api = Api(app)


setup_routes(api)


class Health(Resource):
    def get(self):
        return {"health": True}, 200


health_api.add_resource(Health, "/health")


@app.before_request
def before_request():
    send_log()


@app.errorhandler(Exception)
def handle_exception(error):
    return {"message": str(error)}, 500


if __name__ == "__main__":
    db.init_app(app)
    app.run(host="0.0.0.0", port=8000, debug=True)
