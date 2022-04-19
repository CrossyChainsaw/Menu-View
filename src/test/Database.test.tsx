import { Meal } from '../interfaces/Meal';
import mockData from './mock.json'

test('get data from database', () => {
    let allMeals: Meal[] = mockData;
    console.log(mockData);
    expect(allMeals[0].mealName).toEqual("Burger");
    expect(allMeals[1].mealName).toEqual("Tiramisu");
    expect(allMeals[2].mealName).toEqual("CarrotSoup");
});