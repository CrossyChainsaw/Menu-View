/* eslint-disable jsx-a11y/anchor-is-valid */
import { Product } from '../../interfaces/Product';
import { useCookies } from 'react-cookie';
import './header.css';

interface IProps {
    openCartModal(): void,
    openPayModal(): void
}

export default function Header(props: IProps) {
    const [cookies] = useCookies(['products']);

    const products: Product[] = cookies.products || [];

    function getTotalPrice() {
        let total: number = 0;
        products.forEach(cartItem => {
            total += (cartItem.amount * cartItem.price);
        })
        return total;
    }

    function displayEuros(cents: Number) {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand ms-3" href="#">Restaurant Menu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="ms-auto navbar-nav align-items-center">
                    <ul className="navbar-nav me-5">
                        <div onClick={props.openCartModal} className="d-flex flex-row align-items-center justify-content-end">
                            <div className="cart_icon me-2">
                                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png" alt=""></img>
                                <div style={{ color: "white" }} className="cart_count"><span>{products.length}</span></div>
                            </div>
                            <div className="cart_content">
                                <a style={{ color: "white" }} className="text-decoration-none" href="#">Cart</a>
                                <div style={{ color: "gray" }}>{displayEuros(getTotalPrice())}</div>
                            </div>
                        </div>
                    </ul>

                    <ul className="navbar-nav me-3">
                        <a onClick={props.openPayModal} style={{ color: "white" }} className="text-decoration-none">Betaal</a>
                    </ul>
                </ul>
            </nav >
        </header>
    )
}