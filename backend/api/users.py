
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api import deps
from crud import crud_user
from schemas import user as schemas_user


router = APIRouter()


@router.post("/", response_model=schemas_user.UserInDB)
def create_user(
    user_params: schemas_user.UserCreate,
    db: Session = Depends(deps.get_db)
):
    user = crud_user.get_by_email(db, email=user_params.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system."
        )
    user = crud_user.create(db, user_params=user_params)
    return user
