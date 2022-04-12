import React from 'react';
import logo from './logo.svg';
import './App.css';
import MealItems from '../component/Meal/mealItems';
import Header from '../component/Header/header';
import CategoryItems from '../component/Category/categoryItems';

function App() {
  return (
    <div>
      <Header></Header>
      <CategoryItems></CategoryItems>
    </div>
  );
}

export default App;
