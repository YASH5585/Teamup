from fastapi.testclient import TestClient
from unittest.mock import MagicMock
from app.db.session import get_db
from app.main import app


def test_root_health(client: TestClient) -> None:
    """
    Test that the top-level /health endpoint returns 200 and status ok.
    """
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_api_v1_health(client: TestClient) -> None:
    """
    Test that the versioned /api/v1/health endpoint returns 200 and status ok.
    """
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_db_health_connected(client: TestClient) -> None:
    """
    Test database health endpoint when database connectivity is active.
    Uses dependency override to remain independent of external services.
    """
    mock_db = MagicMock()
    mock_db.execute.return_value = None

    app.dependency_overrides[get_db] = lambda: mock_db
    try:
        response = client.get("/health/db")
        assert response.status_code == 200
        assert response.json() == {"status": "ok", "database": "connected"}
    finally:
        app.dependency_overrides.pop(get_db, None)


def test_db_health_disconnected(client: TestClient) -> None:
    """
    Test database health endpoint when database connection fails.
    Verifies 503 status code without credential exposure.
    """
    mock_db = MagicMock()
    mock_db.execute.side_effect = Exception("Connection refused")

    app.dependency_overrides[get_db] = lambda: mock_db
    try:
        response = client.get("/health/db")
        assert response.status_code == 503
        data = response.json()
        assert data == {"status": "error", "database": "disconnected"}
        # Ensure no sensitive details or connection strings leaked
        assert "password" not in str(data).lower()
        assert "postgresql" not in str(data).lower()
    finally:
        app.dependency_overrides.pop(get_db, None)

