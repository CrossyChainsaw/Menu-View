import { Product } from "./Product"

export type Order = {
    tableId: number,
    price: number,
    products: Product[],
    isDrink: boolean
}