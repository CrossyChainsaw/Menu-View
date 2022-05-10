import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Drink } from '../../interfaces/Drink';
import './drink.css'

interface IAppProps {
    drink: Drink
}

interface IAppState {
}

export default class MealItem extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {}
    }

    public render() {
        return (
            <div className="col-sm-3">
                <Card>
                    <div className="card-body p-0">
                        <img className='drink-image' src={this.props.drink.image}></img>
                        <h5 className="card-title">€{this.props.drink.price}</h5>
                        <p className="card-text">{this.props.drink.name}</p>
                    </div>
                </Card>
            </div>
        );
    }
}


