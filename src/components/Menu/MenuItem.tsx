import { Card } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import { useCookies } from 'react-cookie';
import { removeStock } from '../../api/menuService';
import './Menu.css'

interface IProps {
    product: Product,
    setSomeNum(num: number): void,
    addedProduct(): void
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

    let x = 0;
    async function productClick() {
        if (props.product.stock > 0) {

            props.setSomeNum(x += 1);
            console.log('stock old: ' + props.product.stock);
            addToProducts();
            props.product.stock -= 1;
            removeStock(props.product);
        }
        else {
            alert('out of stock');
        }
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
                        <span className="span-white">{displayEuros(props.product.price)}
                        </span>
                    </div>
                    <button disabled={buttonStuff} className="btn btn-red btn-md btn-block" onClick={() => { productClick(); props.addedProduct() }}>Bestel</button>
                </div>
            </Card >
        </div >
    );
}

// click op menuitem refresht page
// page refresh moet opnieuw waarden ophalen