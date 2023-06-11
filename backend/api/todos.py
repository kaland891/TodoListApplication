from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def get_all_todos():
    return {"get": "todos"}


@router.post("/")
def create_todo():
    return {"post": "todos"}


@router.put("/{todo_id}")
def update_todo():
    todo_id: int
    todo_id = 1  # 根据实际需要赋予一个值

    return {"todo_id": todo_id}


@router.delete("/{todo_id}")
def delete_todo():
    todo_id: int
    q: str = None
    todo_id = 2  # 根据实际需要赋予一个值

    return {"todo_id": todo_id, "q": q}
