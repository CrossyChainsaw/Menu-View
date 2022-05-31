/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../interfaces/Product';
import { useCookies } from 'react-cookie';
import './header.css';

interface IProps {
    openModal(): void
}

export default function Header(props: IProps) {
    const [cookies] = useCookies(['products']);

    const products: Product[] = cookies.products || [];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand ms-3" href="#">Restaurant Menu</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="navbar-nav ms-auto me-3">
                <div className="nav-item">
                    <FontAwesomeIcon style={{ color: "red" }} icon={faShoppingCart} onClick={props.openModal} />
                    <a style={{ color: "white" }}>{products.length}</a>
                </div>
            </ul>
        </nav >
    )
}