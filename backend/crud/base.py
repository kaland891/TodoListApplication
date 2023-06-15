from typing import Any, Optional
from sqlalchemy.orm import Session


class CRUDBase:
    def __init__(self, model) -> None:
        self.model = model

    def get_by_id(self, db: Session, id: Any):
        return db.query(self.model).filter(self.model.id == id).first()

    def get_all(self, db: Session):
        return db.query(self.model).all()

    def remove(self, db: Session, id: Any):
        obj = db.query(self.model).get(id)
        db.delete(obj)
        db.commit()
        return obj
