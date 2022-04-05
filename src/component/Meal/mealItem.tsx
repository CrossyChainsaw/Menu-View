import * as React from 'react';
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
                <div className="card">
                    <div className="card-body">
                        <img className='bigWidth' src={this.props.imgSrc}></img>
                        <h5 className="card-title">€{this.props.mealPrice}</h5>
                        <p className="card-text">{this.props.mealName}</p>
                    </div>
                </div>
            </div>
        );
    }
}


