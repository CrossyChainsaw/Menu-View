import * as React from 'react';
import CategoryItem from './categoryItem';
import MealItems from '../Meal/mealItems';
import { useState, useEffect } from "react";

const apiUrl: string = '127.0.0.1:8080/meals/all';

export default function CategoryItems() {
    const [categoryResult, setCategoryResult] = useState<CategoryItem[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch(apiUrl, {
                method: "GET"
            });
            const jsonData = await data.json();
            setCategoryResult(jsonData);
        };
        api();

        {
            categoryResult.map((value) => {
                return (
                    <CategoryItem key={value.categoryId} categoryId={value.categoryId} categoryName={value.categoryName} />
                    // <MealItems></MealItems>
                );
            })
        }
    }, []);

    return (
        <div>

        </div>
    );
}
