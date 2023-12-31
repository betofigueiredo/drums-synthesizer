from infrastructure.utils.datetimes import Datetimes
from infrastructure.utils.errors import Errors
from infrastructure.utils.general import General
from infrastructure.utils.tokens import Tokens


class Utils:
    def __init__(self):
        self.datetimes = Datetimes()
        self.errors = Errors()
        self.general = General()
        self.tokens = Tokens()
