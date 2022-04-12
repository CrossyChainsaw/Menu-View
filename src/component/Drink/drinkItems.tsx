import * as React from 'react';
import { useState, useEffect, Key } from "react";
import { Drink } from '../../interfaces/Drink';
import DrinkItem from './drinkItem';

const apiUrl: string = 'http://127.0.0.1:8080/drinks/all';

type Props = {
    categoryId: number
};

export default function MealItems(categoryId: Props) {
    const [results, setResults] = useState<Drink[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch(apiUrl, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResults(jsonData);
            console.log(jsonData);
        };
        console.log(results);
        api();
    }, []);

    console.log(results.map(category => category)[0]);
    return (
        <div className="container">
            <div className="row">
                {results.filter(drink => categoryId.categoryId === drink.categoryId).map((drink) => {
                    return (
                        <DrinkItem key={drink.categoryId as Key} drink={drink} />
                    );
                })}
            </div>
        </div>
    );
}