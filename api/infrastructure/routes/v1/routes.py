from .kits_routes import KitsRoutes
from .users_routes import UsersRoutes

# from .songs_routes import SongsRoutes


def setup_routes(api):
    KitsRoutes(api).setup()
    # SongsRoutes(api).setup()
    UsersRoutes(api).setup()
