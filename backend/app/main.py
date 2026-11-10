from fastapi import FastAPI, Depends, Response, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.session import get_db
from app.schemas.health import HealthResponse, DbHealthResponse
from app.api.v1.router import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

# Configure CORS for local development and configured frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get(
    "/health",
    response_model=HealthResponse,
    tags=["Health"],
    summary="Application Health Check",
)
def root_health() -> HealthResponse:
    """
    Top-level application liveness check.
    """
    return HealthResponse(status="ok")


@app.get(
    "/health/db",
    response_model=DbHealthResponse,
    tags=["Health"],
    summary="PostgreSQL Database Health Check",
)
def root_db_health(
    response: Response,
    db: Session = Depends(get_db),
) -> DbHealthResponse:
    """
    Top-level PostgreSQL database connectivity check.
    Executes a lightweight query without exposing connection parameters.
    """
    try:
        db.execute(text("SELECT 1"))
        return DbHealthResponse(status="ok", database="connected")
    except Exception:
        response.status_code = status.HTTP_503_SERVICE_UNAVAILABLE
        return DbHealthResponse(status="error", database="disconnected")


# Mount versioned API routes under /api/v1
app.include_router(api_router, prefix=settings.API_V1_STR)

