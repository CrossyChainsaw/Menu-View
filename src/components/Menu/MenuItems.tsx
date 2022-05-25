import { useState, useEffect, Key } from "react";
import { Product } from '../../interfaces/Product';
import { Category } from '../../interfaces/Category';
import MenuItem from './MenuItem';
import { getAllMenuItems } from "../../api/productService";

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface IProps {
    category: Category
}

let x = 0;
export function updateSnoopDawg() {
    x += 1;
}

export default function Menuitems(props: IProps) {
    const [results, setResults] = useState<Product[]>([]);
    const [someNum, setSomeNum] = useState<number>(0);

    useEffect(() => {
        const api = async () => {
            setResults(await getAllMenuItems());
        };
        api();
        console.log('HELLP');
    }, [someNum]);

    return (
        <div className="container">
            <div className="row">
                {results.filter(product => props.category.ID === product.categoryID).map((product) => {
                    return (
                        <div>
                            <MenuItem key={uid as unknown as Key} product={product} setSomeNum={(num) => {
                                console.log('testing dwaasdw')
                                return setSomeNum(num)
                            }} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}