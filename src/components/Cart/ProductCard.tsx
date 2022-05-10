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

class Card extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            product: this.props.product
        }
    }

    render() {
        return (
            <div>
                <div className="row mb-4 d-flex justify-content-between align-items-center" >
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                            alt=''
                            src={this.props.product.image}
                            className="img-fluid rounded-3" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <h6 >{this.props.product.name}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button className="btn btn-light" onClick={() => { }}>-</button>

                        <input id="form1" min="0" name="quantity" value={this.props.product.amount} disabled={true} className="form-control form-control-sm-6" />

                        <button className="btn btn-light" onClick={() => { }}>+</button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h6 className="mb-0">€ {this.props.product.price}</h6>
                    </div>
                </div>
                <hr className="my-4" />

            </div >
        );
    }
}

export default Card;

// fix update alles op clicks enz