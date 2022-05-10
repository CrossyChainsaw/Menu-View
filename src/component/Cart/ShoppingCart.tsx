import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from './ProductCard';
import './ShoppingCard.css'

import { Product } from '../../interfaces/Product';
import { productArray } from '../Meal/mealItem';
import { Modal, ModalBody } from 'react-bootstrap';

interface IProps {
    onHide(): void,
    show: boolean
}

interface IState {
    tableId: number;
    cartItems: Product[];
}

class Cart extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            tableId: 0,
            cartItems: []
        }
    }

    AddProduct = (product: Product) => {
        this.setState({ cartItems: [...this.state.cartItems, product] });
    }

    RemoveProduct = (product: Product) => {
        this.setState({ cartItems: this.state.cartItems.filter(x => x.id !== product.id) });
    }

    getTotalPrice() {
        let total: number = 0;
        this.state.cartItems.forEach(cartItem => {
            total += (cartItem.amount * cartItem.price);
        })
        return total;
    }

    LogProducts() {
        console.log(productArray);
    }


    GetTotalItemsAmount() {
        let amount: number = 0;
        productArray.map((p) => {
            return amount += p.amount;
        })
        return amount;
    }

    ChangeAmount(product: Product, amount: number) {

    }

    PlaceOrder = () => {
        fetch('http://localhost:8081/api/v1/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "tableId": this.state.tableId,
                "products": productArray.map(x => { return { "name": x.name, "amount": x.amount, "drink": true } })
            })
        }).then(response => console.log(response.json()))
    }

    render() {
        return (
            <Modal
                onHide={this.props.onHide}
                show={this.props.show}
                centered
                keyboard={true}
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        Bestelling voor tafel {this.state.tableId}
                    </Modal.Title>
                </Modal.Header>

                <ModalBody>
                    <section>
                        <h6 className="mb-0 text-muted">{this.GetTotalItemsAmount()} items</h6>
                        <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-lg-8">
                                    <div className="p-5">
                                        {productArray.map((product: Product) =>
                                            <ProductCard product={product} />
                                        )}
                                        <div className="d-flex justify-content-between mb-5">
                                            <h5 className="text-uppercase">Totaal</h5>
                                            <h5>€  {this.getTotalPrice()}  </h5>
                                        </div>
                                        <button type="button" className="btn btn-dark btn-block btn-lg" id="btn-order"
                                            data-mdb-ripple-color="dark" onClick={this.PlaceOrder} >Bestel</button>
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
}

export default Cart;