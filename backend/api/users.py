from fastapi import APIRouter

router = APIRouter()

RECIPES = [
    {
        "id": 1,
        "title": "Apple Pie",
        "ingredients": ["apple", "pie"],
        "instructions": "Boil apples",
    },
    {
        "id": 2,
        "title": "Apple Pie",
        "ingredients": ["apple", "salad"],
        "instructions": "Raw apples",
    },
]


@router.post("/")
def create_user():
    return {"post": "users"}


@router.get("/test/{id}", status_code=200)
def update_user(*, id: int) -> dict:
    # print(type(id))  # ADDED
    result = [recipe for recipe in RECIPES if recipe["id"] == id]
    if result:
        return result[0]


@router.put("/name")
def update_user():
    return {"name": "tom"}


@router.put("/password")
def update_user():
    return {"password": 123}
