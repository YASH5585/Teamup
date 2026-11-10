from typing import List
from pydantic import computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    PROJECT_NAME: str = "TeamUp Backend"
    APP_ENV: str = "development"
    API_V1_STR: str = "/api/v1"

    # PostgreSQL Database URL
    DATABASE_URL: str = "postgresql+psycopg://postgres:postgres@localhost:5432/teamup"

    # CORS Frontend Origins
    FRONTEND_ORIGIN: str = "http://localhost:5173"

    @computed_field
    @property
    def cors_origins(self) -> List[str]:
        if not self.FRONTEND_ORIGIN:
            return ["http://localhost:5173"]
        return [origin.strip() for origin in self.FRONTEND_ORIGIN.split(",") if origin.strip()]


settings = Settings()

