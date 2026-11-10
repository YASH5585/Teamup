# TeamUp Backend Foundation (Phase 3.3)

FastAPI + PostgreSQL backend service foundation for TeamUp.

## Tech Stack

- **Framework**: FastAPI
- **ASGI Server**: Uvicorn
- **ORM / Database Layer**: SQLAlchemy 2.x
- **Database**: PostgreSQL (driver: `psycopg` 3)
- **Settings & Validation**: Pydantic & Pydantic Settings
- **Database Migrations**: Alembic
- **Testing**: Pytest & HTTPX (TestClient)

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # Application entrypoint & CORS middleware
│   ├── core/
│   │   ├── __init__.py
│   │   └── config.py        # Environment & application settings
│   ├── db/
│   │   ├── __init__.py
│   │   ├── session.py       # SQLAlchemy engine & session factory
│   │   └── base.py          # Declarative Base
│   ├── models/
│   │   ├── __init__.py      # Models & future-ready role enums
│   │   └── enums.py
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── health.py        # Pydantic schemas for health checks
│   ├── api/
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── router.py    # Modular API v1 router
│   │       └── endpoints/
│   │           └── health.py
│   └── services/
│       └── __init__.py      # Future business logic services
├── alembic/                 # Database migrations
├── tests/
│   ├── conftest.py
│   └── test_health.py
├── alembic.ini
├── requirements.txt
├── .env.example
├── .gitignore
└── README.md
```

## Getting Started

### 1. Activate Virtual Environment

```bash
# Windows
.\venv\Scripts\activate

# Unix/macOS
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Environment Configuration

Copy `.env.example` to `.env` and set your local PostgreSQL credentials:

```bash
cp .env.example .env
```

### 4. Run Development Server

```bash
uvicorn app.main:app --reload --port 8000
```

Interactive API documentation:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### 5. Health Check Endpoints

- `GET /health` - General service liveness check
- `GET /health/db` - PostgreSQL connection health check (returns HTTP 503 if disconnected)
- `GET /api/v1/health` - Versioned API health check

### 6. Run Tests

```bash
pytest
```

