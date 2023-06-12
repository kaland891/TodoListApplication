from pydantic import BaseModel, HttpUrl

from typing import Sequence


class Recipe(BaseModel):
    id: int
    title: str
    instructions: str
    url: HttpUrl


class RecipeSearchResults(BaseModel):
    results: Sequence[Recipe]


class RecipeCreate(BaseModel):
    id: str
    title: str
    instructions: str
    url: HttpUrl
    submitter_id: int
