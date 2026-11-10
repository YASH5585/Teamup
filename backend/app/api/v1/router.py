from fastapi import APIRouter
from app.api.v1.endpoints import health

api_router = APIRouter()

# Mount health endpoints under /api/v1
api_router.include_router(health.router)

# Future domain routers will be cleanly mounted here:
# api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
# api_router.include_router(competitions.router, prefix="/competitions", tags=["Competitions"])
# api_router.include_router(teams.router, prefix="/teams", tags=["Teams"])

