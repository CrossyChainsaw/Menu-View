import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/App';
import CategoryItems, { apiUrl, Category } from '../component/Category/categoryItems';
import DrinkItems from '../component/Drink/drinkItems';
import DrinkItem from '../component/Drink/drinkItem';
import { Drink } from '../interfaces/Drink'
import CategoryItem from '../component/Category/categoryItem';
import MealItems from '../component/Meal/mealItems';
import { Meal } from '../interfaces/Meal';
import MealItem from '../component/Meal/mealItem';
import Header from '../component/header/header';
import { assert } from 'console';
import { Server } from 'http';
import { Http2ServerResponse } from 'http2';
import mockData from './mock.json'

//test api call met mockdata

// nu wordt in de pagina 'fluffybeer' gezocht
//  expect(await screen.findAllByText(/fluffybeer/)).toBeInTheDocument();

test('get data from database', () => {
    let allMeals: Meal[] = mockData;
    console.log(allMeals[0]);
    expect(allMeals[0].mealName).toEqual("Burger");
    expect(allMeals[1].mealName).toEqual("Tiramisu");
    expect(allMeals[2].mealName).toEqual("CarrotSoup");
});