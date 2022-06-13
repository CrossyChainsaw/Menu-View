import React, { useState } from 'react';
import './App.css';
import CategoryItems from './components/Category/categoryItems';
import Header from './components/Layout/header';
import ShoppingCart from './components/Cart/ShoppingCart';
import PayingMenu from './components/Paying/PayingMenu';
import PayingMethods from './components/Paying/PayingMethods';
import Footer from './components/Layout/footer';


export default function App() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showPayingMenu, setShowPayingMenu] = useState<boolean>(false);
  const [showPayingMethods, setShowPayingMethods] = useState<boolean>(false);

  return (
    <>
      <ShoppingCart show={showCart} onHide={() => setShowCart(false)}></ShoppingCart>
      <PayingMenu show={showPayingMenu} onHide={() => setShowPayingMenu(false)} onPay={() => setShowPayingMethods(true)}></PayingMenu>
      <PayingMethods show={showPayingMethods} onHide={() => setShowPayingMethods(false)}></PayingMethods>
      <Header openCartModal={() => setShowCart(true)} openPayModal={() => setShowPayingMenu(true)}></Header>
      <CategoryItems></CategoryItems>
      <Footer></Footer>
    </>
  )
}
