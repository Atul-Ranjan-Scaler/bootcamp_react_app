import React, { useState, useEffect } from "react";
import { getProduct } from "../api";
import Card from "../components/ProductCard";
import { useParams } from "react-router-dom";


function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    async function fetchProduct() {
        const data = await getProduct(id);
        const product = await data.json();
        setProduct(product);
    }

    useEffect(()=> {
        fetchProduct();
    })

    return (
        <div className='single-product'>
            <div className='single-product__product'>
                <Card product={product}/>
            </div>
        </div>
    )
}

export default SingleProduct;
