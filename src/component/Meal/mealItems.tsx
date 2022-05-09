import { useState, useEffect, Key } from "react";
import { Meal } from '../../interfaces/Meal';
import MealItem from './mealItem';

const apiUrl: string = 'http://127.0.0.1:8080/meals/all';
type Props = {
    categoryId: number
};

export default function MealItems(categoryId: Props) {
    const [results, setResults] = useState<Meal[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch(apiUrl, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResults(jsonData);
        };
        api();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {results.filter(meal => categoryId.categoryId === meal.CategoryId).map((meal) => {
                    return (
                        <MealItem key={meal.categoryId as Key} meal={meal} />
                    );
                })}
            </div>
        </div>
    );
}