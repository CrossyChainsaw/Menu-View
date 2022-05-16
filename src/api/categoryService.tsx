export const getAllCategories = async () => {
    const data = await fetch('http://localhost:8082/api/v1/category/all');
    const json = await data.json();
    return json;
};