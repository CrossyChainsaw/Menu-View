import { useState, useEffect, Key } from "react";
import { Product } from '../../interfaces/Product';
import { Category } from '../../interfaces/Category';
import MenuItem from './MenuItem';
import { getAllMenuItems } from "../../api/productService";
import { Toast } from "react-bootstrap";

const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface IProps {
    category: Category
}

export default function Menuitems(props: IProps) {
    const [results, setResults] = useState<Product[]>([]);
    const [someNum, setSomeNum] = useState<number>(0);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const api = async () => {
            setResults(await getAllMenuItems());
        };
        api();
    }, [someNum]);

    return (
        <div className="container">
            <div className="position-fixed bottom-0 end-0 p-3 text-white" style={{ zIndex: 11 }}>
                <Toast bg={"success"} onClose={() => setShowNotification(false)} show={showNotification} delay={3000} autohide>
                    <Toast.Body>Producted Succesfully added to cart</Toast.Body>
                </Toast>
            </div>


            <div className="row">
                {results.filter(product => props.category.ID === product.categoryID).map((product) => {
                    return (
                        <MenuItem key={uid() as unknown as Key} product={product} addedProduct={() => setShowNotification(true)} setSomeNum={(num) => setSomeNum(num)} />
                    );
                })}
            </div>
        </div>
    );
}