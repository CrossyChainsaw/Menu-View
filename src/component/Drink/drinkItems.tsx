import * as React from 'react';
import DrinkItem from './drinkItem';
import { useState, useEffect } from "react";

const apiUrl: string = 'http://127.0.0.1:8080/drinks/all';

type drinkItem = {
    drinkId: number;
    drinkName: string;
    drinkPrice: number;
};

export default function App() {
    const [result, setResult] = useState<drinkItem[]>([]);

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
                        <DrinkItem id={value.drinkId} name={value.drinkName} price={value.drinkPrice} />
                    );
                })}
            </h1>
            <h2>drinks page</h2>
        </div>
    );
}