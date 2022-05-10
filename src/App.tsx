import React, { useState } from 'react';
import './App.css';
import CategoryItems from './components/Category/categoryItems';
import Header from './components/header/header';
import ShoppingCart from './components/Cart/ShoppingCart';

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
