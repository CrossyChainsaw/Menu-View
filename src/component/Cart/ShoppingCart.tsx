import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
// import { convertCompilerOptionsFromJson, isTemplateSpan } from 'typescript';
// import { useCookies } from "react-cookie";
import { Order } from '../../interfaces/Order'
import { Product } from '../../interfaces/Product';
import { productArray } from '../Meal/mealItem';

interface IProps { }

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
            order: { tableId: 1, price: 0, products: [] },
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
            totalPrice += product.totalPrice;
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
            this.x += p.amount;
        })
        return this.x;
    }

    FillArray = () => {
        // productArray.forEach((product) => {
        //     this.setState(products.push(product));
        // })
    }

    SetOrder = () => {
        this.setState({ order: { tableId: 1, price: this.state.totalPrice, products: productArray } });
    }

    PostData = (order: Order) => {
        console.table(order)
        console.log(JSON.stringify(order))
        fetch('http://localhost:8081/api/v1/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "tableId": order.tableId,
                "products": productArray})
        }).then(response => console.log(response.json()))
    }

    PlaceOrder = () => {
        this.SetOrder();
        console.log(this.state.order);
        this.PostData(this.state.order);
        console.table(this.state.order);
        console.log('hey');
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
                                                    <h1 className="fw-bold mb-0 text-black">Bestelling voor tafel {this.state.order.tableId}</h1>
                                                    <h6 className="mb-0 text-muted">{this.GetTotalItemsAmount()} items</h6>
                                                </div>
                                                {productArray.map((product) =>
                                                    <Card name={product.name} imgSrc={product.imgSrc} totalPrice={product.totalPrice} amount={product.amount} singlePrice={product.singlePrice} />
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
        );
    }
}

export default Cart;