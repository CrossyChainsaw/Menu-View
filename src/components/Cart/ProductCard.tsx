import { Component } from 'react';
import { Product } from '../../interfaces/Product';
import './ProductCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    product: Product
    removeProduct(product: Product): void
    updateAmount(product: Product, amount: Number): void
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

    handleChange = (event: any, min = 1, max = 20) => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        console.log(value)
        this.props.updateAmount(this.props.product, value)
    };

    render() {
        return (
            <tr>
                <td className="w-25">
                    <img
                        alt=''
                        src={this.props.product.image}
                        className="img-thumbnail" />
                </td>
                <td>{this.props.product.name}</td>
                <td>{this.displayEuros(this.props.product.price)}</td>
                <input min={1} max={20} type="number" className="input-lg" id="input1" onChange={this.handleChange} value={this.props.product.amount}></input>
                <td>{this.displayEuros(this.props.product.amount * this.props.product.price)}</td>
                <td>
                    <FontAwesomeIcon style={{ color: "red" }} icon={faTimes} onClick={() => { this.props.removeProduct(this.props.product) }} />
                </td>
            </tr >
        );
    }
}