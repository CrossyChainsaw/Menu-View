import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MealItems from '../component/Meal/mealItems';
import CategoryItems from '../component/Category/categoryItems';
import Header from '../component/header/header';
import ShoppingCart from '../component/Cart/ShoppingCart';


export default function App() {
  const [show, setShow] = useState<boolean>(false);
  if (!show) {
    return (<div className='menu'>
      <Header></Header>
      <CategoryItems></CategoryItems>
      <button onClick={() => setShow(true)}> hey </button>
    </div>);
  }
  else {
    return (<div className='menu'>
      <ShoppingCart></ShoppingCart>
      <button onClick={() => setShow(false)}> hey </button>
    </div>);
  }
}
