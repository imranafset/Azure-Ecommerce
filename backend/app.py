from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Ecommerce Backend API")

class Product(BaseModel):
    id: int
    name: str
    price: float
    description: str

# Mock database
products_db = [
    Product(id=1, name="Laptop", price=999.99, description="High performance laptop"),
    Product(id=2, name="Phone", price=599.99, description="Latest smartphone"),
    Product(id=3, name="Headphones", price=199.99, description="Noise cancelling headphones"),
]

@app.get("/")
def root():
    return {"message": "Welcome to Ecommerce API"}

@app.get("/products", response_model=List[Product])
def get_products():
    return products_db
