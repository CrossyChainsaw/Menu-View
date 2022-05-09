import React, { useState } from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddProduct, productArray, RemoveAmountOfExisitingProduct } from '../Meal/mealItem';

interface IProps {
    name: string;
    imgSrc: string;
    singlePrice: number;
    totalPrice: number;
    amount: number;
}

interface IState {
    items: any[];
}

class Card extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            items: [],
        }
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
                            name: this.props.name,
                            amount: this.props.amount,
                            singlePrice: this.props.singlePrice,
                            totalPrice: this.props.totalPrice,
                            imgSrc: this.props.imgSrc,
                            isDrink: false
                        })}>-</button>

                        <input id="form1" min="0" name="quantity" value={this.props.amount} disabled={true} className="form-control form-control-sm-6" />

                        <button className="btn btn-light" onClick={() => AddProduct({
                            name: this.props.name,
                            amount: this.props.amount,
                            singlePrice: this.props.singlePrice,
                            totalPrice: this.props.totalPrice,
                            imgSrc: this.props.imgSrc,
                            isDrink: false
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

// fix update alles op clicks enz