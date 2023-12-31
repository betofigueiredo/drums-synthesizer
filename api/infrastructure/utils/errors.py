from flask_restful import HTTPException as FlaskHTTPException


class Errors(BaseException):
    def HTTPException(self, error):
        return FlaskHTTPException(description=str(error))
