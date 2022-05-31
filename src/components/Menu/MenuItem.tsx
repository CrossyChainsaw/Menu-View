import { Card } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import { useCookies } from 'react-cookie';
import './Menu.css'
import { useState } from 'react';
import { updateSnoopDawg } from './MenuItems';
import { getSingleItem, removeStock } from '../../api/menuService'

interface IProps {
    product: Product,
    setSomeNum(num: number): void
}


export default function MenuItem(props: IProps) {
    const [cookies, setCookie] = useCookies(['products']);

    function addToProducts() {
        const products: Product[] = cookies.products || [];
        if (products.map(x => x.ID).includes(props.product.ID)) {
            products.map(p =>
                p.ID === props.product.ID
                    ? { ...p, amount: p.amount++ }
                    : p
            );
        } else {
            products.push(props.product)
        }
        setCookie('products', JSON.stringify(products), { path: '/' })
    }


    let x = 0;
    async function productClick() {
        const product: Product = await getSingleItem(props.product)
        if (product.stock > 0) {
            props.setSomeNum(x += 1); // doet niks?
            console.log('stock old: ' + product.stock);
            addToProducts();
            product.stock -= 1;
            removeStock(product);
        }
        else {
            alert('out of stock');
        }
        // update the product so people on the other website see the shit
        // update stock
    }

    var classStuff = !props.product.stock ? 'meal-image-effect-out-of-stock' : 'meal-image-effect';
    var buttonStuff = props.product.stock ? false : true;

    function displayEuros(cents: Number) {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }


    return (
        <div className="col-sm-3">
            <Card className={classStuff}>
                <img className='card-img-top meal-image' src={props.product.image} alt=""></img>
                <div className="card-body">
                    <div className="wrapper-new2">
                        <h6>{props.product.name}</h6>
                        <span className="span-white">{displayEuros(props.product.price)}
                        </span>
                    </div>
                    <button disabled={buttonStuff} className="btn btn-red btn-md btn-block" onClick={() => { productClick() }}>Order</button>
                </div>
            </Card >
        </div >
    );
}

// click op menuitem refresht page
// page refresh moet opnieuw waarden ophalen