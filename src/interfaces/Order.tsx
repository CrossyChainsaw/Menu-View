import { Product } from "./Product"

export type Order = {
    id: number,
    tableId: number,
    price: number,
    products: Product[],
    isDrink: boolean
}