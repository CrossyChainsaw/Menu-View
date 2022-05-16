export const placeOrder = async (tableId: number, cartItems: any) => {
    const data = await fetch('http://localhost:8082/api/v1/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "tableId": tableId,
            "products": cartItems
        })
    });
    const json = await data.json();
    return json;
}

export const getAllMenuItems = async () => {
    const data = await fetch('http://localhost:8082/api/v1/product/all');
    const json = await data.json();
    return json;
}