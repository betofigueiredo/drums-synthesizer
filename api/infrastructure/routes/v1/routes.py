from .kits_routes import KitsRoutes

# from .songs_routes import SongsRoutes
# from .users_routes import UsersRoutes


def setup_routes(api):
    KitsRoutes(api).setup()
    # SongsRoutes(api).setup()
    # UsersRoutes(api).setup()
