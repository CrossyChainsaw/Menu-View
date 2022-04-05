import * as React from 'react';
import CategoryItem from './categoryItem';
import MealItems from '../Meal/mealItems';
import { useState, useEffect } from "react";

const apiUrl: string = 'http://localhost:8080/categories/all';

export interface Category {
    categoryId: number,
    categoryName: string
}

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
                        </div>
                    );
                })}
        </div>
    );
}
