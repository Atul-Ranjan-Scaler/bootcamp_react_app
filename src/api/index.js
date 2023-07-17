export const getProducts = () => fetch('https://fakestoreapi.com/products/category/electronics');
export const getProduct = (id) => fetch(`https://fakestoreapi.com/products/${id}`);
