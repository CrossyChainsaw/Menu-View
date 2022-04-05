import * as React from 'react';
import { Card } from 'react-bootstrap';
import './meal.css'

export interface IAppProps {
    mealId: any,
    imgSrc: any,
    mealName: any,
    categoryId: any,
    mealPrice: any
}



export interface IAppState {
}

export default class MealItem extends React.Component<IAppProps, IAppState> {
    mealId: React.Key | null | undefined;
    categoryId: any;
    imgSrc: any;
    mealName: any;
    mealPrice: any;
    constructor(props: any) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className="col-sm-3">
                <Card>
                    <div className="card-body p-0">
                        <img w-100 className='bigWidth' src={this.props.imgSrc}></img>
                        <h5 className="card-title">€{this.props.mealPrice}</h5>
                        <p className="card-text">{this.props.mealName}</p>
                    </div>
                </Card>
            </div>
        );
    }
}


