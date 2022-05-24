import { Card } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import { useCookies } from 'react-cookie';
import './Menu.css'

interface IProps {
    product: Product
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

    function displayEuros(cents: Number) {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }

    return (
        <div className="col-sm-3">
            <Card className='meal-image-effect'>
                <img className='card-img-top meal-image' src={props.product.image} alt=""></img>
                <div className="card-body">
                    <div className="wrapper-new2">
                        <h6>{props.product.name}</h6>
                        <span className="span-white">{displayEuros(props.product.price)}
                        </span>
                    </div>

                    <button className="btn btn-red btn-md btn-block" onClick={() => { addToProducts() }}>Order</button>
                </div>
            </Card >
        </div >
    );
}