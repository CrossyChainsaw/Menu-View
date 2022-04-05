import * as React from 'react';
import MealItem from './mealItem';
import { useState, useEffect } from "react";

const apiUrl: string = 'http://127.0.0.1:8080/meals/all';

type mealItem = {
    mealId: number;
    imgSrc: string;
    mealName: string;
    categoryId: number;
    mealPrice: number;
};

export default function MealItems() {
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
        <div className="container">
            <div className="row">
                {result.map((value) => {
                    return (
                        <MealItem key={value.mealId} mealId={value.mealId} categoryId={value.categoryId} imgSrc={value.imgSrc} name={value.mealName} price={value.mealPrice} />
                    );
                })}
            </div>
        </div>
    );
}