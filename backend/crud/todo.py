from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from crud.base import CRUDBase
from models import Todo as ModelsTodo


class CRUDTodo(CRUDBase):

    def create(self, db: Session, todo_params):
        todo_data = jsonable_encoder(todo_params)
        todo = self.model(**todo_data)
        db.add(todo)
        db.commit()
        db.refresh(todo)
        return todo

    def update(self, db: Session, id, todo_params):

        todo = db.query(self.model).filter(self.model.id == id).first()

        todo_params_dict = todo_params.dict(exclude_unset=True)
        for key, value in todo_params_dict.items():
            setattr(todo, key, value)

        db.commit()
        db.refresh(todo)
        return todo


crud_todo = CRUDTodo(ModelsTodo)
