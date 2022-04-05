import * as React from 'react';
import MealItem from './mealItem';
import { useState, useEffect } from "react";

const apiUrl: string = 'http://127.0.0.1:8080/meals/all';

export default function MealItems() {
    const [result, setResult] = useState<MealItem[]>([]);

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
        <div className="container">
            <div className="row">
                {result.map((value) => {
                    return (
                        <MealItem key={value.mealId} mealId={value.mealId} categoryId={value.categoryId} imgSrc={value.imgSrc} mealName={value.mealName} mealPrice={value.mealPrice} />
                    );
                })}
            </div>
        </div>
    );
}