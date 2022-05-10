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
        name: meal.name,
        amount: 1,
        image: meal.image,
        id: meal.id,
        price: meal.price
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

let totalPrice: 0;
export function RemoveAmountOfExisitingProduct(product: Product) {
    productArray.forEach((p) => {
        if (p.id == product.id) {
            p.amount--;
            totalPrice -= product.price;
            DeleteFromArrayIfAmountIsZero(p);
        }
    })
    console.log(productArray);
}

function AddAmountToExisitingProduct(product: Product) {
    productArray.forEach((p) => {
        if (p.id == product.id) {
            p.amount++;
            totalPrice += product.price; // fout
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
                    <img className='card-img-top meal-image' src={this.props.meal.image} alt=""></img>
                    <div className="card-body">
                        <div className="wrapper-new2">
                            <h6>{this.props.meal.name}</h6>
                            <span className="span-white">€{this.props.meal.price}
                            </span>
                        </div>

                        <button className="btn btn-red btn-md btn-block" onClick={() => AddMeal(this.props.meal)}>Order</button>
                    </div>
                </Card >
            </div >
        );
    }
}