import React from 'react';
import logo from './logo.svg';
import './App.css';
import MealItems from '../component/Meal/mealItems';
import CategoryItems from '../component/Category/categoryItems';
import Header from '../component/header/header';

function App() {
  return (
    <div>
      <Header></Header>
      <CategoryItems></CategoryItems>
    </div>
  );
}

export default App;
