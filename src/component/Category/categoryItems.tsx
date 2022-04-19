import CategoryItem from './categoryItem';
import MealItems from '../Meal/mealItems';
import { useState, useEffect } from "react";
import DrinkItems from '../Drink/drinkItems';
import { Category } from '../../interfaces/Category';

export const apiUrl: string = 'http://localhost:8080/categories/all';

export default function CategoryItems() {
    const [categoryResult, setCategoryResult] = useState<Category[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch(apiUrl);
            const jsonData = await data.json();
            setCategoryResult(jsonData);
        };
        api();
    }, []);

    return (
        <div>
            {
                categoryResult.map((category) => {
                    return (
                        <div>
                            <CategoryItem key={category.categoryId} categoryId={category.categoryId} categoryName={category.categoryName} />
                            <MealItems categoryId={category.categoryId}></MealItems>
                            <DrinkItems categoryId={category.categoryId}></DrinkItems>
                        </div>
                    );
                })}
        </div>
    );
}
