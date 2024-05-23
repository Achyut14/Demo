import os
from urllib.parse import quote_plus

class Config:
    # Ensure the DB_PASSWORD is handled safely and is URL-encoded
    db_password = os.getenv('DB_PASSWORD') or ''
    encoded_password = quote_plus(db_password)

    # Build the SQLAlchemy database URI
    SQLALCHEMY_DATABASE_URI = (
        f"postgresql://{os.getenv('DB_USER')}:{encoded_password}"
        f"@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
    )

    # Other configuration settings
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('JWT_SECRET')
    API_KEY = os.getenv('API_KEY')
