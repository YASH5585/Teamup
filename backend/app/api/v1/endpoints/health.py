from fastapi import APIRouter, Depends, Response, status
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.health import HealthResponse, DbHealthResponse

router = APIRouter(prefix="/health", tags=["Health"])


@router.get("", response_model=HealthResponse)
def get_health() -> HealthResponse:
    """
    Standard application health check endpoint.
    """
    return HealthResponse(status="ok")


@router.get("/db", response_model=DbHealthResponse)
def get_db_health(
    response: Response,
    db: Session = Depends(get_db),
) -> DbHealthResponse:
    """
    PostgreSQL database connectivity check.
    Executes a simple query without exposing credentials.
    """
    try:
        db.execute(text("SELECT 1"))
        return DbHealthResponse(status="ok", database="connected")
    except Exception:
        response.status_code = status.HTTP_503_SERVICE_UNAVAILABLE
        return DbHealthResponse(status="error", database="disconnected")

