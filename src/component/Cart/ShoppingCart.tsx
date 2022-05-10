//import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProductCard from './ProductCard';
import './ShoppingCard.css'

import { Order } from '../../interfaces/Order'
import { Product } from '../../interfaces/Product';
import { productArray } from '../Meal/mealItem';
import { Modal, ModalBody } from 'react-bootstrap';

interface IProps {
    onHide(): void,
    show: boolean
}

interface IState {
    amount: number;
    totalPrice: number;
    tableId: number;
    order: Order;
    products: Product[];
}

class Cart extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            amount: 0,
            totalPrice: 0,
            tableId: 0,
            order: { id: 1, tableId: 1, price: 0, products: [], isDrink: false },
            products: []
        }
    }

    RemoveFromProductArray(product: Product) {
        productArray.forEach((element, index) => {
            if (element == product) delete productArray[index];
        });
    }

    getTotalPrice() {
        let totalPrice: number = 0;
        productArray.map((product) => {
            totalPrice += product.price; // <- fout
        })
        totalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100;
        return totalPrice;
    }

    LogProducts() {
        console.log(productArray);
    }

    x: number = 0;
    GetTotalItemsAmount() {
        productArray.map((p) => {
            return this.x += p.amount;
        })
        return this.x;
    }

    FillArray = () => {
        // productArray.forEach((product) => {
        //     this.setState(products.push(product));
        // })
    }

    SetOrder = () => {
        this.setState({ order: { id: 0, tableId: 1, price: this.state.totalPrice, products: productArray, isDrink: false } });
    }

    PostData = (order: Order) => {
        console.table(order)
        console.log(JSON.stringify(order))
        fetch('http://localhost:8081/api/v1/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "tableId": order.tableId,
                "products": productArray
            })
        }).then(response => console.log(response.json()))
    }

    PlaceOrder = () => {
        this.SetOrder();
        this.PostData(this.state.order);
        console.table(this.state.order);
        console.log('hey');
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
                        Bestelling voor tafel {this.state.order.tableId}
                    </Modal.Title>
                </Modal.Header>

                <ModalBody>
                    <section>
                        <h6 className="mb-0 text-muted">{this.GetTotalItemsAmount()} items</h6>
                        <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-lg-8">
                                    <div className="p-5">
                                        {productArray.map((product) =>                                                                // v fout
                                            <ProductCard id={product.id} name={product.name} imgSrc={product.image} totalPrice={product.price} amount={product.amount} singlePrice={product.price} />
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
                        {/* <div>
                    <button> burgor </button>
                    <button>shak</button>
                    <button onClick={() => console.log(this.state.order)}>Log current order</button>
                </div> */}
                    </section>
                </ModalBody>
            </Modal >
        );
    }
}

export default Cart;