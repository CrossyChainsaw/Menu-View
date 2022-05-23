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

class Card extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            product: this.props.product
        }
    }

    render() {
        return (
            <tr>
                <td className="w-25">
                    <img
                        alt=''
                        src={this.props.product.image}
                        className="img-fluid img-thumbnail" />
                </td>
                <td>{this.props.product.name}</td>
                <td>{"€" + this.props.product.price}</td>
                <td className="qty"><input type="text" className="form-control" id="input1" onChange={e => this.props.updateAmount(this.props.product, parseInt(e.target.value))} value={this.props.product.amount}></input></td>
                <td>{"€" + (this.props.product.price * this.props.product.amount)}</td>
                <td>
                    <FontAwesomeIcon style={{ color: "red" }} icon={faTimes} onClick={() => { this.props.removeProduct(this.props.product) }} />
                </td>
            </tr>
        );
    }
}

export default Card;

// fix update alles op clicks enz