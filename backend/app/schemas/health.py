from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field(default="ok", description="Service health status")


class DbHealthResponse(BaseModel):
    status: str = Field(description="Overall database health status")
    database: str = Field(description="Database connectivity indicator")

