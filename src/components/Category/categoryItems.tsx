import CategoryItem from './categoryItem';
import MenuItems from '../Menu/MenuItems'
import { useState, useEffect } from "react";
import { Category } from '../../interfaces/Category';

export const apiUrl: string = 'http://localhost:8082/categories/all';

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
                        <div className="mt-4">
                            <CategoryItem key={category.ID} ID={category.ID} name={category.name} />
                            <MenuItems category={category}></MenuItems>
                        </div>
                    );
                })}
        </div>
    );
}
