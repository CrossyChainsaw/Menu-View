import { Component } from 'react';
import { Product } from '../../interfaces/Product';
import './ProductCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {
    product: Product
}

interface IState {
    product: Product;
}

export default class ProductCard extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            product: this.props.product
        }
    }

    displayEuros = (cents: Number) => {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.displayEuros(this.props.product.price)}</td>
                <td>{this.props.product.amount}</td>
                <td>{this.displayEuros(this.props.product.amount * this.props.product.price)}</td>
            </tr >
        );
    }
}