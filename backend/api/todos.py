from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api import deps
from crud import crud_todo
from schemas import todo as schemas_todo


router = APIRouter()


@router.get("/", response_model=list[schemas_todo.TodoFull])
def get_all_todos(
    db: Session = Depends(deps.get_db)
):
    todos = crud_todo.get_all(db)
    return todos


@router.post("/", response_model=schemas_todo.TodoFull)
def create_todo(
    todo_params: schemas_todo.TodoBase,
    db: Session = Depends(deps.get_db)
):
    todo = crud_todo.create(db, todo_params)
    return todo


@router.put("/{todo_id}")
def update_todo(
    todo_id: int,
    todo_params: schemas_todo.TodoBase,
    db: Session = Depends(deps.get_db)
):
    todo = crud_todo.get_by_id(db=db, id=todo_id)

    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    todo = crud_todo.update(db, todo_id, todo_params)
    return todo


@router.delete("/{todo_id}")
def delete_todo(
    todo_id: int,
    db: Session = Depends(deps.get_db),
):

    todo = crud_todo.get_by_id(db=db, id=todo_id)

    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    todo = crud_todo.remove(db=db, id=todo_id)

    return todo
