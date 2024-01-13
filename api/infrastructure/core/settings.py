import os
from dotenv import load_dotenv
from sqlalchemy.orm import declarative_base


load_dotenv()


class Settings:
    ENV = os.environ.get("ENV")
    PROJECT_NAME = "Drums Machine"
    API_V1_PREFIX = "/api/v1"
    DB_URL = f"mysql+pymysql://{os.environ.get('MYSQL_USER')}:{os.environ.get('MYSQL_PASSWORD')}@{os.environ.get('MYSQL_HOST')}:{os.environ.get('MYSQL_PORT')}/{os.environ.get('MYSQL_DATABASE')}?use_unicode=True"
    DB_BASE_MODEL = declarative_base()
    JWT_SECRET = os.environ.get("JWT_SECRET") or ""
    JWT_ALGORITHM = os.environ.get("JWT_ALGORITHM") or ""
    GOOGLE_AUTH_CLIENT_ID = os.environ.get("GOOGLE_AUTH_CLIENT_ID")
    GOOGLE_AUTH_CLIENT_SECRET = os.environ.get("GOOGLE_AUTH_CLIENT_SECRET")
    ACCESS_TOKEN_EXPIRE_IN_MINUTES = 60 * 24 * 7
    BETTERSTACK_SOURCE_ID = os.environ.get("BETTERSTACK_SOURCE_ID")
    BETTERSTACK_SOURCE_TOKEN = os.environ.get("BETTERSTACK_SOURCE_TOKEN")
    WEB_BASE_URL = os.environ.get("WEB_BASE_URL") or ""
    API_BASE_URL = os.environ.get("API_BASE_URL") or ""

    class Config:
        case_sensitive = True


settings = Settings()
