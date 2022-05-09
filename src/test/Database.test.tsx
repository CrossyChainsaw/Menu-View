import mockData from './mock.json'
import { Meal } from '../interfaces/Meal';


test('get data from database', () => {
    let allMeals: Meal[] = mockData;
    console.log(mockData);
    expect(allMeals[0].mealName).toEqual("Burger");
    expect(allMeals[1].mealName).toEqual("Tiramisu");
    expect(allMeals[2].mealName).toEqual("CarrotSoup");
});