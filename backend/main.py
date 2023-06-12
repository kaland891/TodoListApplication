import uvicorn
from fastapi import FastAPI
from api.api import api_router


app = FastAPI()
app.include_router(api_router, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, host="localhost", port=8000)
