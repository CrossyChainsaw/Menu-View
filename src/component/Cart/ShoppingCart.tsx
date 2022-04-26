//import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from './Card';
// import { convertCompilerOptionsFromJson, isTemplateSpan } from 'typescript';
// import { useCookies } from "react-cookie";
import { Order } from '../../interfaces/Order'
import { Product } from '../../interfaces/Product';

interface IProps {}

interface IState {
    amount: number;
    totalPrice: number;
    tableId: number;
    order: Order;
    products: Product[];
}


// const [cookies, setCookie] = useCookies();

class Cart extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            amount: 0,
            totalPrice: 0,
            tableId: 0,
            order: { id: 1, tableId: 1, price: 0, products: [] },
            products: []
        }
    }

    NewProduct = (product: Product) => {
        this.setState({ products: [...this.state.products, product] })
    }

    CalculateTotalPrice = () => {
        this.state.products.forEach(product => {
            this.setState({ totalPrice: product.price + this.state.totalPrice })
            console.log(this.state.totalPrice)
        });
    }

    GetData = () => {
        fetch('http://localhost:8081/api/v1/products')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    products: data
                })
            });
    }

    SetOrder = () => {
        this.setState({ order: { id: 2, tableId: 2, price: this.state.totalPrice, products: this.state.products } })
    }

    PostData = (order: Order) => {
        console.table(order)
        console.log(JSON.stringify(order))
        fetch('http://localhost:8081/api/v1/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "tableId": order.tableId,
                "products": order.products})
        }).then(response => console.log(response.json()))
    }

    TestPost = () => {
        this.PostData(this.state.order);
    }

    Test = () => {
        this.NewProduct({ name: "Burgor", amount: 1, price: 10 })
        this.CalculateTotalPrice();

    }

    Test2 = () => {
        this.CalculateTotalPrice();
        this.SetOrder();
        console.log(this.state.order);
    }

    componentDidMount() {
        //this.GetData();
    }

    render() {
        return (
            <section className="h-100 h-custom" data-style="background-color: #d2c9ff;">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" data-style='border-radius: 15px;'>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Bestelling voor tafel {this.state.tableId}</h1>
                                                    <h6 className="mb-0 text-muted">{this.state.products.length} items</h6>
                                                </div>
                                                {this.state.products.map((product) =>
                                                    <Card name={product.name} imgSrc='logo192.png' price={product.price} />
                                                )}
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Totaal</h5>
                                                    <h5>€  {this.state.totalPrice}  </h5>
                                                </div>
                                                <button type="button" className="btn btn-dark btn-block btn-lg" id="btn-order"
                                                    data-mdb-ripple-color="dark" onClick={() => this.PostData(this.state.order)}>Bestel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => this.Test()}> burgor </button>
                    <button onClick={() => this.Test2()}>shak</button>
                </div>
            </section>
        );
    }
}

export default Cart;