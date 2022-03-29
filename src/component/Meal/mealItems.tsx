import * as React from 'react';
import MealItem from './mealItem';
import { useState, useEffect } from "react";

const apiUrl: string = 'http://127.0.0.1:8080/meals/all';

// bijna zelfde naam als MealItem
type mealItem = {
    mealId: number;
    mealName: string;
    mealPrice: number;
};

export default function App() {
    const [result, setResult] = useState<mealItem[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch(apiUrl, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData);
        };

        api();
    }, []);

    return (
        <div className="App">
            <h1>
                {result.map((value) => {
                    return (
                        <MealItem mealId={value.mealId} name={value.mealName} price={value.mealPrice} />
                    );
                })}
            </h1>
            <h2>meals page</h2>
        </div>
    );
}