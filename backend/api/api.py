from fastapi import APIRouter
from api.todos import router as todos_router

api_router = APIRouter()
api_router.include_router(todos_router, prefix="/todos", tags=["todos"])
