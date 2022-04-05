import * as React from 'react';
import { Card } from 'react-bootstrap';
import './meal.css'

export interface IAppProps {
    mealId: any,
    imgSrc: any,
    name: any,
    categoryId: any,
    price: any
}



export interface IAppState {
}

export default class MealItem extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <img className='bigWidth' src={this.props.imgSrc}></img>
                        <h5 className="card-title">€{this.props.price}</h5>
                        <p className="card-text">{this.props.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}


