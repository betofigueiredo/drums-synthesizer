import json
from typing import Any
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
        return json.loads(data)

    def validate_schema(self, schema, params) -> dict[str, Any]:
        try:
            schema(**params)
            return {"error": None}
        except ValidationError as exc:
            return {
                **exc.errors()[0],
                "error": exc.errors()[0]["msg"],
                "field": exc.errors()[0]["loc"][0],
            }
