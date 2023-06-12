from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from crud.base import CRUDBase
from models import User as ModelsUser


class CRUDUser(CRUDBase):
    def get_by_email(self, db: Session, email: str):
        return db.query(self.model).filter(self.model.email == email).first()

    def create(self, db: Session, user_params):
        user = ModelsUser(
            name=user_params.name,
            email=user_params.email,
            hashed_password=get_password_hash(user_params.password),
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    def authenticate(self, db: Session, email, password):
        user = self.get_by_email(db, email=email)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

    def update_name(self, db: Session, id, user_params):
        user = self.get_by_id(db=db, id=id)
        user.name = user_params.name
        db.commit()
        db.refresh(user)
        return user

    def update_password(self, db: Session, id, user_params):
        user = self.get_by_id(db=db, id=id)
        user.hashed_password = get_password_hash(user_params.password)
        db.commit()
        db.refresh(user)
        return user


crud_user = CRUDUser(ModelsUser)
