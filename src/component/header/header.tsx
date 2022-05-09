/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react'
import { productArray } from '../Meal/mealItem';
import './header.css';

interface IProps {
    openModal(): void
}

interface IState {
    shoppingCartAmount: number
}

export default class Header extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            shoppingCartAmount: 0
        }
    }

    x: number = 0;
    GetTotalItemsAmount() {
        productArray.map((p) => {
            return this.x += p.amount;
        })
        return this.x;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 m-1">
                        <FontAwesomeIcon style={{ color: "red" }} icon={faShoppingCart} onClick={this.props.openModal} />
                        <a style={{ color: "white" }}>{this.GetTotalItemsAmount()}</a>
                    </div>
                </div>
            </nav>
        )
    }
}