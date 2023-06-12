import uvicorn
from fastapi import FastAPI
from api.api import api_router
from typing import Optional

from recipe_schemas import RecipeSearchResults, Recipe, RecipeCreate
from recipe_data import RECIPES

app = FastAPI()
app.include_router(api_router, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/test/{id}", status_code=200, response_model=Recipe)
def api_match(*, id: int) -> dict:
    # print(type(id))  # added
    result = [recipe for recipe in RECIPES if recipe["id"] == id]
    if result:
        return result[0]


@app.get("/search/", status_code=200, response_model=RecipeSearchResults)
def api_search(keyword: Optional[str] = None, max_results: Optional[int] = 10) -> dict:
    if not keyword:
        return {"results": RECIPES[:max_results]}

    results = filter(lambda recipe: keyword.lower() in recipe["title"].lower(), RECIPES)
    return {"results": list(results)[:max_results]}


@app.post("/recipe/", status_code=201, response_model=Recipe)
def api_creat(*, recipe_in: RecipeCreate) -> dict:
    new_entry_id = len(RECIPES) + 1
    recipe_entry = Recipe(
        id=new_entry_id,
        title=recipe_in.title,
        instructions=recipe_in.instructions,
        url=recipe_in.url,
    )
    RECIPES.append(recipe_entry.dict())
    return recipe_entry


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, host="localhost", port=8000)
