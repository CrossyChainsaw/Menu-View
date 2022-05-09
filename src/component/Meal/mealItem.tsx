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
        id: meal.mealId,
        price: meal.mealPrice
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
    return productArray.some((p) => p.id === product.id)
}

function DeleteFromArrayIfAmountIsZero(product: Product) {
    if (!product.amount) {
        alert(product.name + " is verwijderd uit de bestelling")
        productArray.forEach((element, index) => {
            if (element === product) delete productArray[index];
        });
    }
}

export function RemoveAmountOfExisitingProduct(product: Product) {
    productArray.forEach((p) => {
        if (p.id == product.id) {
            p.amount--;
            p.totalPrice -= product.singlePrice;
            DeleteFromArrayIfAmountIsZero(p);
        }
    })
    console.log(productArray);
}

function AddAmountToExisitingProduct(product: Product) {
    productArray.forEach((p) => {
        if (p.id == product.id) {
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
            <div className="col-sm-3">
                <Card className='meal-image-effect'>
                    <img className='card-img-top meal-image' src={this.props.meal.img_Src} alt=""></img>
                    <div className="card-body">
                        <div className="wrapper-new2">
                            <h6>{this.props.meal.mealName}</h6>
                            <span className="span-white">€{this.props.meal.mealPrice}
                            </span>
                        </div>

                        <button className="btn btn-red btn-md btn-block" onClick={() => AddMeal(this.props.meal)}>Order</button>
                    </div>
                </Card >
            </div >
        );
    }
}