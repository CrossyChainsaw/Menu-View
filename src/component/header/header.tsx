import React, { Component } from 'react'
import './header.css';

type Props = {}
type State = {}

export default class Header extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="App">
                <div className='imageMoment'>
                    <img className='Food-banner' src="https://t4.ftcdn.net/jpg/02/09/64/33/360_F_209643310_7tdlZx6oMF9iPqnt2PzbXdfYTNKGohdm.jpg"></img>
                </div>
                <div className="App-header">
                    <h1 className='somePaddingTop'>Menu</h1>
                    <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem reprehenderit odio, quibusdam sed, dignissimos laboriosam autem asperiores aut molestiae ab sequi! Sint minima, officiis quas cupiditate sunt quisquam error quod?</p>
                </div>
            </div>
        )
    }
}