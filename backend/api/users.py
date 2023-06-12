from fastapi import APIRouter
from schemas import user as schemas_user

router = APIRouter()


@router.post("/", response_model=schemas_user.UserInDB)
def create_user(user_params: schemas_user.UserCreate):
    return {"post": "users"}


@router.put("/name", response_model=schemas_user.UserInDB)
def update_user(user_params: schemas_user.UserUpdateName):
    return {"name": "tom"}


@router.put("/password", response_model=schemas_user.UserInDB)
def update_user(user_params: schemas_user.UserUpdatePassword):
    return {"password": 123}
