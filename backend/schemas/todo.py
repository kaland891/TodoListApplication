from datetime import datetime
from pydantic import BaseModel


class TodoBase(BaseModel):
    is_done: bool
    content: str


class Todo(TodoBase):
    id: int


class TodoFull(Todo):
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
