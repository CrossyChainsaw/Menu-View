import React, { useEffect, useState } from "react"
import MealItems from "../component/Meal/mealItems";
import { Meal } from "../interfaces/Meal";

export default function Kaas(/*meal: Meal*/) {

    function removeItem(x: number) {
        //db count - x
    }

    const [results, setResults] = useState<Meal>();
    const [results2, setResults2] = useState<Meal>();
    const [buttonClick, setButtonClick] = useState<number>(0);

    useEffect(() => {
        const apiGet = async () => {
            const data = await fetch("http://127.0.0.1:8080/meals/getByID/" + 1, {
                method: "GET",
            });
            const jsonData = await data.json();
            setResults(jsonData);
        };
        const apiPut = async () => {
            const data = await fetch("http://127.0.0.1:8080/meals/update/" + 1, {
                method: "PUT",
                body: JSON.stringify(results)
            });
            const jsonData = await data.json();
            setResults2(jsonData);
        };
        apiGet();
        console.log(results! && results);
        if (results) {
            results.stock--;
        }
        apiPut();
    }, [buttonClick]);
    console.log(results);
    console.log(results2);

    function addButtonClick() {
        let x: number = buttonClick;
        x++;
        setButtonClick(x)
    }

    return (
        < div >
            <button onClick={addButtonClick}>REMOVE 1</button>
        </div >
    )
}

<button></button>