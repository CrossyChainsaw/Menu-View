import React from 'react';
import logo from './logo.svg';
import './App.css';
import MealItem from '../component/mealItem';
import Header from '../component/header/header';

function App() {
  return (
    <div>
      <Header></Header>
      <MealItem></MealItem>
    </div>
  );
}

export default App;
