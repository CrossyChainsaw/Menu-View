import { useState, useEffect, Key } from "react";
import { Product } from '../../interfaces/Product';
import { Category } from '../../interfaces/Category';
import MenuItem from './MenuItem';

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface IProps {
    category: Category
}

export default function Menuitems(props: IProps) {
    const [results, setResults] = useState<Product[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch('http://localhost:8082/meals/all', {
                method: "GET"
            });
            const jsonData = await data.json();
            setResults(jsonData);
        };
        api();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {results.filter(product => props.category.ID === product.categoryID).map((product) => {
                    return (
                        <MenuItem key={uid as unknown as Key} product={product} />
                    );
                })}
            </div>
        </div>
    );
}