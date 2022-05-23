import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../interfaces/Product';
import { Modal, ModalBody } from 'react-bootstrap';
import { placeOrder } from '../../api/productService';
import { useCookies } from 'react-cookie';

interface IProps {
    onHide(): void,
    show: boolean
}

function Cart(props: IProps) {
    const [tableID, setTableID] = useState(0);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [cookies, setCookie] = useCookies(['products']);

    useEffect(() => {
        setTableID(parseInt(document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === "tableID" ? decodeURIComponent(parts[1]) : r
        }, '')));

        const products: Product[] = cookies.products || [];
        setCartItems(products);
    }, [cookies.products]);

    function RemoveProduct(product: Product) {
        let products: Product[] = cookies.products || [];
        products = products.filter(x => x.ID !== product.ID);
        setCookie('products', JSON.stringify(products), { path: '/' })
    }

    function updateAmount(product: Product, amount: Number) {
        let products: Product[] = cookies.products || [];
        products.map(p =>
            p.ID === product.ID
                ? { ...p, amount: amount }
                : p
        );
        setCookie('products', JSON.stringify(products), { path: '/' })
    }

    function getTotalPrice() {
        let total: number = 0;
        cartItems.forEach(cartItem => {
            total += (cartItem.amount * cartItem.price);
        })
        return total;
    }

    function GetTotalItemsAmount() {
        const products: Product[] = cookies.products || [];
        return products.length;
    }

    function PlaceOrder() {
        placeOrder(tableID, cartItems.map((product: Product) => { return { "name": product.name, "amount": product.amount, "drink": true } }));
    }

    function displayEuros(cents: Number) {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }

    return (
        <Modal
            onHide={props.onHide}
            show={props.show}
            centered
            keyboard={true}
        >

            <Modal.Header closeButton>
                <Modal.Title>
                    Bestelling voor tafel {tableID}
                </Modal.Title>
            </Modal.Header>

            <ModalBody>
                <section>
                    <h6 className="mb-0 text-muted">{GetTotalItemsAmount()} items</h6>
                    <div className="card-body p-0">
                        <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((product: Product) =>
                                    <ProductCard updateAmount={(product: Product, amount: Number) => { updateAmount(product, amount) }} removeProduct={(product: Product) => RemoveProduct(product)} product={product} />
                                )}
                            </tbody>
                            <div className="d-flex justify-content-between mb-5">
                                <h5 className="text-uppercase">Totaal</h5>
                                <h5> {displayEuros(getTotalPrice())}  </h5>
                            </div>
                            <button type="button" className="btn btn-dark btn-block btn-lg" id="btn-order"
                                data-mdb-ripple-color="dark" onClick={PlaceOrder} >Bestel</button>
                        </table>
                    </div>
                </section >
            </ModalBody >
        </Modal >
    );
}

export default Cart;