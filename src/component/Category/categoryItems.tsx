import * as React from 'react';
import CategoryItem from './categoryItem';
import { useState, useEffect } from "react";
import MealItems from '../Meal/mealItems';
import MealItemTest from '../Meal/mealItem';

const apiUrl: string = 'http://127.0.0.1:8080/categories/all';

type categoryItem = {
    categoryId: number;
    categoryName: number;
};

type MealItem = {
    mealId: number;
    imgSrc: string;
    mealName: string;
    categoryId: number;
    mealPrice: number;
};

export default function CategoryItems() {
    const [mealResult, setMealResult] = useState<MealItem[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch(apiUrl, {
                method: "GET"
            });
            const jsonData = await data.json();
            setMealResult(jsonData);
        };
        api();

        {
            mealResult.map((value) => {
                return (
                    <MealItemTest key={value.mealId} mealId={value.mealId} categoryId={value.categoryId} imgSrc={value.imgSrc} name={value.mealName} price={value.mealPrice} />
                );
            })
        }
        console.log(mealResult);
    }, []);



    const [categoryResult, setCategoryResult] = useState<categoryItem[]>([]);
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
                );
            })
        }
    }, []);






    return (
        <div>
            <h1>{categoryResult.slice(0, 1)}</h1>
        </div>
    );
}
