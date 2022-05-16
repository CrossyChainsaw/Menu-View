import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import './Menu.css'

interface IProps {
    product: Product
}

interface IState {
}

export default class MenuItem extends Component<IProps, IState> {
    setCookie = (name: any, value: any, days = 7, path = '/') => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString()
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path + "; SameSite=None; Secure"
    }

    getCookie = (name: any): Product[] => {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '').split(",") as unknown as Product[]
    }

    deleteCookie = (name: any, path = "/") => {
        this.setCookie(name, '', -1, path)
    }

    addToProducts = () => {
        this.deleteCookie("products");
        var products = this.getCookie("products");
        products.push(this.props.product);
        this.setCookie("products", products)
        console.log(this.getCookie("products"));
    }

    public render() {
        return (
            <div className="col-sm-3">
                <Card className='meal-image-effect'>
                    <img className='card-img-top meal-image' src={this.props.product.image} alt=""></img>
                    <div className="card-body">
                        <div className="wrapper-new2">
                            <h6>{this.props.product.name}</h6>
                            <span className="span-white">€{this.props.product.price}
                            </span>
                        </div>

                        <button className="btn btn-red btn-md btn-block" onClick={() => { this.addToProducts() }}>Order</button>
                    </div>
                </Card >
            </div >
        );
    }
}