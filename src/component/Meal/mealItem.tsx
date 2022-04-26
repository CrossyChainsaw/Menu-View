import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Meal } from '../../interfaces/Meal';
import { Product } from '../../interfaces/Product';
import './meal.css'

interface IAppProps {
    meal: Meal
}

interface IAppState {
}

export const productArray: Product[] = [];

function AddMeal(meal: Meal) {
    //meal omtoveren tot product
    let product: Product = {
        name: meal.mealName,
        price: meal.mealPrice,
        amount: 1,
        imgSrc: meal.img_Src,
        id: meal.mealId
    }
    // als prudct niet bestaat toebveogen als wel bestaat amount++
    if (ProductWasAlreadyAdded(product)) {
        alert('this product was already added');
        // add amount
    }
    else {
        productArray.push(product)
        alert('new product');
    }
    //alert(product.name + " toegevoegd");
}

function ProductWasAlreadyAdded(product: Product) {
    return productArray.some((p) => p.id == product.id)
}

export default class MealItem extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {}
    }

    public render() {
        return (
            <div className="col-sm-3" onClick={() => AddMeal(this.props.meal)}>
                <Card className='meal-image-effect'>
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


