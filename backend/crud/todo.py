from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from crud.base import CRUDBase
from models import Todo as ModelsTodo
from typing import Any, Optional


class CRUDTodo(CRUDBase):

    def get_by_id_with_user_id(self, db:Session, id: Any, user_id: Any):
        return db.query(self.model).filter(self.model.id == id).filter(self.model.user_id == user_id).first()

    def get_all_by_user_id(self, db: Session, user_id: Any):
         return db.query(self.model).filter(self.model.user_id == user_id).all()

    def create(self, db: Session, user_id: Any, todo_params):
        todo_data = jsonable_encoder(todo_params)
        todo = self.model(**todo_data)
        todo.user_id = user_id
        db.add(todo)
        db.commit()
        db.refresh(todo)
        return todo

    def update(self, db: Session, id: Any, user_id: Any, todo_params):

        todo = db.query(self.model).filter(self.model.id == id).filter(self.model.user_id == user_id).first()

        todo_params_dict = todo_params.dict(exclude_unset=True)
        for key, value in todo_params_dict.items():
            setattr(todo, key, value)

        db.commit()
        db.refresh(todo)
        return todo


crud_todo = CRUDTodo(ModelsTodo)
