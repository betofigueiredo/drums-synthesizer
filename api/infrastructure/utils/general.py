from flask import jsonify
from pydantic import ValidationError


class General:
    def only_valid_values(self, **kwargs):
        return {k: v for k, v in kwargs.items() if v is not None}

    def model_to_dict(self, model):
        res = {}
        for item in model.__table__.columns:
            value = getattr(model, item.name, None)
            res[item.name] = str(value) if value else None
        return res

    def jsonify(self, data):
        return jsonify(data)

    def validate_schema(self, schema, params):
        try:
            schema(**params)
            return True
        except ValidationError as exc:
            return {
                **exc.errors()[0],
                "message": exc.errors()[0]["msg"],
            }, 400
