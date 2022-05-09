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

export let productArray: Product[] = [];

function AddMeal(meal: Meal) {
    //meal omtoveren tot product
    let product: Product = {
        name: meal.mealName,
        singlePrice: Math.round((meal.mealPrice + Number.EPSILON) * 100) / 100,
        totalPrice: meal.mealPrice,
        amount: 1,
        imgSrc: meal.img_Src, 
        isDrink: meal.isDrink
    }
    // als prudct niet bestaat toebveogen als wel bestaat amount++
    AddProduct(product);
    //alert(product.name + " toegevoegd");
}

export function AddProduct(product: Product) {
    if (ProductWasAlreadyAdded(product)) {
        alert('this product was already added');
        AddAmountToExisitingProduct(product);
        console.log("Add " + product.name + " to order");
    }
    else {
        productArray.push(product)
        alert('new product');
        console.log("Create " + product.name + " in order");
    }
    console.log(productArray);
}



function ProductWasAlreadyAdded(product: Product) {
    return productArray.some((p) => p.name == product.name)
}

function DeleteFromArrayIfAmountIsZero(product: Product) {
    if (product.amount == 0) {
        alert(product.name + " is verwijderd uit de bestelling")
        productArray.forEach((element, index) => {
            if (element == product) delete productArray[index];
        });
    }
}

export function RemoveAmountOfExisitingProduct(product: Product) {
    productArray.forEach((p) => {
        if (p.name == product.name) {
            p.amount--;
            p.totalPrice -= product.singlePrice;
            DeleteFromArrayIfAmountIsZero(p);
        }
    })
    console.log(productArray);
}

function AddAmountToExisitingProduct(product: Product) {
    productArray.forEach((p) => {
        if (p.name == product.name) {
            p.amount++;
            p.totalPrice += product.singlePrice; // fout
        }
    })
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


