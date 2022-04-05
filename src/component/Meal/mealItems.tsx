import * as React from 'react';
import MealItem from './mealItem';
import { useState, useEffect } from "react";

const apiUrl: string = 'http://127.0.0.1:8080/meals/all';
type Props = {
    categoryId: number
};

export default function MealItems(categoryId: Props) {
    const [results, setResults] = useState<MealItem[]>([]);

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

    console.log(results.map(category => category)[0]);
    console.log(categoryId);
    return (
        <div className="container">
            <div className="row">
                {results.filter(meal => categoryId.categoryId === meal.categoryId).map((meal) => {
                    return (
                        <MealItem key={meal.mealId} mealId={meal.mealId} categoryId={meal.categoryId} imgSrc={meal.imgSrc} mealName={meal.mealName} mealPrice={meal.mealPrice} />
                    );
                })}
            </div>
        </div>
    );
}