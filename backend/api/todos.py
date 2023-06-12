from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session
from schemas import todo as schemas_todo
from crud import crud_todo

router = APIRouter()


@router.get("/", response_model=list[schemas_todo.TodoInDB])
def get_all_todos():
    return {"get": "todos"}


@router.post("/", response_model=schemas_todo.TodoInDB)
def create_todo(todo_params: schemas_todo.TodoCreate):
    return {"post": "todos"}


@router.put("/{todo_id}", response_model=schemas_todo.TodoInDB)
def update_todo(todo_id: int, todo_params: schemas_todo.TodoCreate):
    todo_id = 1  # 根据实际需要赋予一个值

    return {"todo_id": todo_id}


@router.delete("/{todo_id}", response_model=schemas_todo.TodoInDB)
def delete_todo(todo_id: int):
    q: str = None
    todo_id = 2  # 根据实际需要赋予一个值

    return {"todo_id": todo_id, "q": q}
