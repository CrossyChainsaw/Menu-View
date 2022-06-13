import CategoryItem from './categoryItem';
import MenuItems from '../Menu/MenuItems'
import { useState, useEffect, Key } from "react";
import { Category } from '../../interfaces/Category';
import { getAllCategories } from '../../api/categoryService';

const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export default function CategoryItems() {
    const [categoryResult, setCategoryResult] = useState<Category[]>([]);
    useEffect(() => {
        const api = async () => {
            setCategoryResult(await getAllCategories());
        };
        api();
    }, []);

    return (
        <div>
            {
                categoryResult.map((category) => {
                    return (
                        <main role="main" className="container">
                            <div key={category.ID} className="mt-4">
                                <CategoryItem key={category.ID} ID={category.ID} name={category.name} />
                                <MenuItems key={uid() as unknown as Key} category={category}></MenuItems>
                            </div>
                        </main>
                    );
                })}
        </div>
    );
}
