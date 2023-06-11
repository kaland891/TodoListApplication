from fastapi import APIRouter
from api.todos import router as todos_router
from api.users import router as users_router

api_router = APIRouter()
api_router.include_router(todos_router, prefix="/todos", tags=["todos"])
api_router.include_router(users_router, prefix="/users", tags=["users"])
