from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def get_all_todos():
    return {"get": "todos"}


@router.post("/")
def create_todo():
    return {"post": "todos"}
