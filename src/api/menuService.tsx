import React from "react";
import { Product } from "../interfaces/Product";

export const removeStock = async (product: Product) => {
    const data = await fetch('http://localhost:8082/api/v1/productput/' + product.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id": product.id,
            "categoryid": product.categoryID,
            "image": product.image,
            "name": product.name,
            "price": product.price,
            "stock": product.stock
        })
    });
    console.log('stock new: ' + product.stock);
    const json = await data.json();
    return json;
}