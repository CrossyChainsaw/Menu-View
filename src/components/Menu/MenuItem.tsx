import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import './Menu.css'

interface IProps {
    product: Product
}

interface IState {
}

export default class MenuItem extends Component<IProps, IState> {
    public render() {
        return (
            <div className="col-sm-3">
                <Card className='meal-image-effect'>
                    <img className='card-img-top meal-image' src={this.props.product.image} alt=""></img>
                    <div className="card-body">
                        <div className="wrapper-new2">
                            <h6>{this.props.product.name}</h6>
                            <span className="span-white">€{this.props.product.price}
                            </span>
                        </div>

                        <button className="btn btn-red btn-md btn-block" /*onClick={() => AddMeal(this.props.meal)}*/>Order</button>
                    </div>
                </Card >
            </div >
        );
    }
}