import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import Card from '../components/ProductCard';

function ProductLanding() {

    const [products, setProducts] = useState([]);
    async function fetchProducts (){ 
        const fetch = await getProducts();
        const data = await fetch.json();
        setProducts(data);
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    
   
    return (
        <div className='product_landing'>
            <div className='product_landing__container'>
                <div className='product_landing__grid'>
                    {
                        products.map((product)=> <Card key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductLanding;
