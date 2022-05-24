import { Card } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import { useCookies } from 'react-cookie';
import { removeStock } from '../../api/menuService';
import './Menu.css'
import { useState } from 'react';
import { updateSnoopDawg } from './MenuItems';

interface IProps {
    product: Product,
    setSomeNum(num: number): void
}


export default function MenuItem(props: IProps) {
    const [cookies, setCookie] = useCookies(['products']);

    function addToProducts() {
        const products: Product[] = cookies.products || [];
        products.push(props.product)
        setCookie('products', JSON.stringify(products), { path: '/' })
    }

    let x = 0;
    function productClick(){
        props.setSomeNum(x += 1);
        console.log('stock old: ' + props.product.stock);
        addToProducts();
        props.product.stock -= 1;
        removeStock(props.product);
    }


    var classStuff = !props.product.stock ? 'meal-image-effect-out-of-stock' : 'meal-image-effect';
    var buttonStuff = props.product.stock ? false : true;
    return (
        <div className="col-sm-3">       
            <Card className={classStuff}>
                <img className='card-img-top meal-image' src={props.product.image} alt=""></img>
                <div className="card-body">
                    <div className="wrapper-new2">
                        <h6>{props.product.name}</h6>
                        <span className="span-white">€{props.product.price}
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