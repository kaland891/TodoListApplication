from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api import deps
from crud import crud_todo
from schemas import todo as schemas_todo


router = APIRouter()


@router.get("/", response_model=list[schemas_todo.TodoInDB])
def get_all_todos(
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user)
):
    todos = crud_todo.get_all_by_user_id(db=db, user_id=current_user.id)
    return todos


@router.post("/", response_model=schemas_todo.TodoInDB)
def create_todo(
    todo_params: schemas_todo.TodoCreate,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user)
):
    todo = crud_todo.create(db=db, user_id=current_user.id, todo_params=todo_params)
    return todo


@router.put("/{todo_id}", response_model=schemas_todo.TodoInDB)
def update_todo(
    todo_id: int,
    todo_params: schemas_todo.TodoCreate,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user)
):
    todo = crud_todo.get_by_id_with_user_id(db=db, id=todo_id, user_id=current_user.id)

    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    todo = crud_todo.update(db=db, id=todo_id, user_id=current_user.id, todo_params=todo_params)
    return todo


@router.delete("/{todo_id}", response_model=schemas_todo.TodoInDB)
def delete_todo(
    todo_id: int,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user)
):

    todo = crud_todo.get_by_id_with_user_id(db=db, id=todo_id, user_id=current_user.id)

    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    todo = crud_todo.remove(db=db, id=todo_id)

    return todo
