import { render, screen } from '@testing-library/react';
import CategoryItems from '../component/Category/categoryItems';
import DrinkItems from '../component/Drink/drinkItems';
import DrinkItem from '../component/Drink/drinkItem';
import { Drink } from '../interfaces/Drink'
import CategoryItem from '../component/Category/categoryItem';
import MealItems from '../component/Meal/mealItems';
import { Meal } from '../interfaces/Meal';
import MealItem from '../component/Meal/mealItem';
import Header from '../component/header/header';
import App from '../app/App';

// Render All
test("render App.tsx", () => {
  render(<App />)
})
test("render categoryItem.tsx", () => {
  render(<CategoryItem categoryId={0} categoryName={"categoryTest"} />)
})
test("render categoryItems.tsx", () => {
  render(<CategoryItems />)
})
test("render drinkItem.tsx", () => {
  let drink1: Drink = { categoryId: 0, CategoryId: 0, drinkId: 0, drinkName: "drinkItemTest", drinkPrice: 0.00, img_Src: "drinkItemTest" }
  render(<DrinkItem drink={drink1} />)
})
test("render drinkItems.tsx", () => {
  render(<DrinkItems categoryId={0} />)
})
test("render mealItem.tsx", () => {
  let meal1: Meal = { categoryId: 0, CategoryId: 0, mealId: 0, mealName: "mealItemTest", mealPrice: 0.00, img_Src: "mealItemTest" }
  render(<MealItem meal={meal1} />)
})
test("render mealItems.tsx", () => {
  render(<MealItems categoryId={0} />)
})
test("render header.tsx", () => {
  render(<Header openModal={() => 1} />)
})
