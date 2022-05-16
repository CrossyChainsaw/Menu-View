import CategoryItem from './categoryItem';
import MenuItems from '../Menu/MenuItems'
import { useState, useEffect } from "react";
import { Category } from '../../interfaces/Category';
import { getAllCategories } from '../../api/categoryService';

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
                        <div className="mt-4">
                            <CategoryItem key={category.ID} ID={category.ID} name={category.name} />
                            <MenuItems category={category}></MenuItems>
                        </div>
                    );
                })}
        </div>
    );
}
