import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Meal } from '../../interfaces/Meal';
import './meal.css'

interface IAppProps {
    meal: Meal
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
                        <img className='meal-image' src={this.props.meal.img_Src}></img>
                        <h5 className="card-title">€{this.props.meal.mealPrice}</h5>
                        <p className="card-text">{this.props.meal.mealName}</p>
                    </div>
                </Card>
            </div>
        );
    }
}


