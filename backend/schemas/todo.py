from datetime import datetime
from pydantic import BaseModel


class TodoBase(BaseModel):
    is_done: bool
    content: str

class TodoCreate(TodoBase):
    pass

class Todo(TodoBase):
    id: int


class TodoInDB(Todo):
    user_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
