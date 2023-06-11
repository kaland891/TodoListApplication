from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def read_root():
    return {"Hello": "World"}


"""
@router.post("/", response_model=schemas_todo.TodoInDB)


@router.put("/{todo_id}", response_model=schemas_todo.TodoInDB)


@router.delete("/{todo_id}", response_model=schemas_todo.TodoInDB)
"""
