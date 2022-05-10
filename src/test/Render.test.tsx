import { render, screen } from '@testing-library/react';
import CategoryItems from '../component/Category/categoryItems';
import Menuitems from '../component/Menu/MenuItem';
import Menuitem from '../component/Menu/MenuItem';
import { Product } from '../interfaces/Product'
import CategoryItem from '../component/Category/categoryItem';
import Header from '../component/header/header';
import App from '../app/App';

// Render All
// test("render App.tsx", () => {
//   render(<App />)
// })
// test("render categoryItem.tsx", () => {
//   render(<CategoryItem ID={0} name={"categoryTest"} />)
// })
// test("render categoryItems.tsx", () => {
//   render(<CategoryItems />)
// })
// test("render drinkItem.tsx", () => {
//   let drink1: Drink = { categoryID: 0, id: 0, name: "drinkItemTest", price: 0.00, image: "drinkItemTest" }
//   render(<DrinkItem drink={drink1} />)
// })
// test("render drinkItems.tsx", () => {
//   render(<DrinkItems categoryId={0} />)
// })
// test("render mealItem.tsx", () => {
//   let meal1: Meal = { categoryID: 0, id: 0, name: "mealItemTest", price: 0.00, image: "mealItemTest", stock: 1 }
//   render(<MealItem meal={meal1} />)
// })
// test("render mealItems.tsx", () => {
//   render(<MealItems categoryId={0} />)
// })
// test("render header.tsx", () => {
//   render(<Header openModal={() => 1} />)
// })
