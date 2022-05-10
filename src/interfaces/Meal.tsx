import { Product } from "./Product";

export interface Meal {
    stock: number;
    categoryID: number,
    image: string,
    id: number,
    name: string,
    price: number
}