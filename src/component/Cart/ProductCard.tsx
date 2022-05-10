import React from 'react';
import './ProductCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AddProduct, productArray, RemoveAmountOfExisitingProduct } from '../Meal/mealItem';

interface IProps {
    id: number;
    name: string;
    imgSrc: string;
    totalPrice: number;
    amount: number;
    singlePrice: number;
}

interface IState {
    items: any[];
    amount: number;
}

class Card extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            items: [],
            amount: 1
        }
    }

    AddProduct = () => {
        const count = this.state.amount;
        this.setState({ amount: count + 1 });
    }

    RemoveProduct = () => {
        const count = this.state.amount;
        if (this.state.amount > 0) {
            this.setState({ amount: count - 1 });
        }
    }

    doMore = () => {
        this.AddProduct();
    }

    doLess = () => {
        this.RemoveProduct();
    }

    render() {
        return (
            <div>
                <div className="row mb-4 d-flex justify-content-between align-items-center" >
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                            alt=''
                            src={this.props.imgSrc}
                            className="img-fluid rounded-3" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <h6 >{this.props.name}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button className="btn btn-light" onClick={() => RemoveAmountOfExisitingProduct({
                            id: this.props.id,
                            name: this.props.name,
                            amount: this.props.amount,
                            image: this.props.imgSrc,
                            price: 0
                        })}>-</button>

                        <input id="form1" min="0" name="quantity" value={this.props.amount} disabled={true} className="form-control form-control-sm-6" />

                        <button className="btn btn-light" onClick={() => AddProduct({
                            id: this.props.id,
                            name: this.props.name,
                            amount: this.props.amount,
                            image: this.props.imgSrc,
                            price: 0
                        })}>+</button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h6 className="mb-0">€ {this.props.totalPrice}</h6>
                    </div>
                </div>
                <hr className="my-4" />

            </div >
        );
    }
}

export default Card;