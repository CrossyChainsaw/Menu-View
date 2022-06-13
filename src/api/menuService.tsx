import React from "react";
import { Product } from "../interfaces/Product";

export const removeStock = async (product: Product) => {
    const data = await fetch('http://localhost:8082/api/v1/product/' + product.ID, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id": product.ID,
            "categoryid": product.categoryID,
            "image": product.image,
            "name": product.name,
            "price": product.price,
            "stock": product.stock
        })
    });
    const json = await data.json();
    return json;
}

export const hasStock = async (product: Product) => {
    const data = await fetch('http://localhost:8082/api/v1/product/' + product.ID);
    const json = await data.json();
    console.log(json);
    return json.stock;
}

export const getSingleItem = async (product: Product) => {
    const data = await fetch('http://localhost:8082/api/v1/product/' + product.ID);
    const json = await data.json();
    return json;
}