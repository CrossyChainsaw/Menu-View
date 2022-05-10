import React, { useState } from 'react';
import './App.css';
import CategoryItems from '../component/Category/categoryItems';
import Header from '../component/header/header';
import ShoppingCart from '../component/Cart/ShoppingCart';

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <ShoppingCart show={show} onHide={() => setShow(false)}></ShoppingCart>
      <header>
        <Header openModal={() => setShow(true)}></Header>
      </header>
      <main role="main" className="container">
        <CategoryItems></CategoryItems>
      </main>
      <footer>
        <div className="container text-center">
          <p>&#169; BitchesOfTheStreet</p>
        </div>
      </footer></>
  )
}
