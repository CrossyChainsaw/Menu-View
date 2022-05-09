import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MealItems from '../component/Meal/mealItems';
import CategoryItems from '../component/Category/categoryItems';
import Header from '../component/header/header';
import ShoppingCart from '../component/Cart/ShoppingCart';
import { Button } from 'react-bootstrap';


export default function App() {
  const [show, setShow] = useState<boolean>(false);
  if (!show) {
    return (<div className='menu'>
      <Header></Header>
      <CategoryItems></CategoryItems>
      <Button onClick={() => setShow(true)}> Bestelling afronden </Button>
    </div>);
  }
  else {
    return (<div className='menu'>
      <ShoppingCart></ShoppingCart>
      <Button onClick={() => setShow(false)}> Terug naar menu </Button>
    </div>);
  }
}
