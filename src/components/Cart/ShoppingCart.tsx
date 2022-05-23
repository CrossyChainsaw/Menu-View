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
    const [cookies] = useCookies(['products']);

    useEffect(() => {
        setTableID(parseInt(document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === "tableID" ? decodeURIComponent(parts[1]) : r
        }, '')));

        const products: Product[] = cookies.products || [];
        setCartItems(products);
    }, [cookies.products]);

    function AddProduct(product: Product) {
        setCartItems([...cartItems, product]);
    }

    function RemoveProduct(product: Product) {
        setCartItems(cartItems.filter(x => x.id !== product.id));
    }

    function getTotalPrice() {
        let total: number = 0;
        cartItems.forEach(cartItem => {
            total += (cartItem.amount * cartItem.price);
        })
        return total;
    }

    function LogProducts() {
        console.log(cartItems);
    }

    function GetTotalItemsAmount() {
        let amount: number = 0;
        cartItems.map((product: Product) => {
            return amount += product.amount;
        })
        return amount;
    }

    function ChangeAmount(product: Product, amount: number) {

    }

    function PlaceOrder() {
        placeOrder(tableID, cartItems.map((product: Product) => { return { "name": product.name, "amount": product.amount, "drink": true } }));
    }

    function CreateCookie(cname: string, cvalue: number, hours: number) {
        const d = new Date();
        d.setTime(d.getTime() + (hours * 24 * 60 * 60 * 1000 + 7200000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
                        <div className="row g-0">
                            <div className="col-lg-8">
                                <div className="p-5">
                                    {cartItems.map((product: Product) =>
                                        <ProductCard product={product} />
                                    )}
                                    <div className="d-flex justify-content-between mb-5">
                                        <h5 className="text-uppercase">Totaal</h5>
                                        <h5>€  {getTotalPrice()}  </h5>
                                    </div>
                                    <button type="button" className="btn btn-dark btn-block btn-lg" id="btn-order"
                                        data-mdb-ripple-color="dark" onClick={PlaceOrder} >Bestel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ModalBody>

            <Modal.Footer className="text-center p-5">
                <div className="mb-3">
                    <span className="d-block font-weight-semi-bold">Order Total</span>
                    <span className="d-block">$56.99</span>
                </div>
            </Modal.Footer>
        </Modal >
    );
}

export default Cart;