import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../interfaces/Product';
import { Modal, ModalBody } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

interface IProps {
    onHide(): void,
    show: boolean,
    onPay(): void
}

export default function PayingMenu(props: IProps) {
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

    function displayEuros(cents: Number) {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }

    return (
        <Modal
            onHide={props.onHide}
            show={props.show}
            centered
            keyboard={true}
            size="lg"
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
                                    <th scope="col">Product</th>
                                    <th scope="col">Prijs</th>
                                    <th scope="col">Aantal</th>
                                    <th scope="col">Totaal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((product: Product) =>
                                    <ProductCard key={product.ID} product={product} />
                                )}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Totaal</h5>
                            <h5> {displayEuros(getTotalPrice())}  </h5>
                        </div>
                        <button type="button" className="btn btn-dark btn-block btn-lg" id="btn-order"
                            data-mdb-ripple-color="dark" onClick={() => { props.onPay(); props.onHide(); }}>Betaal</button>
                    </div>
                </section >
            </ModalBody >
        </Modal >
    );
}