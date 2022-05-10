import { Product } from "./Product";

export interface Meal {
    id: number,
    categoryID: number,
    image: string,
    name: string,
    price: number
    stock: number;
}