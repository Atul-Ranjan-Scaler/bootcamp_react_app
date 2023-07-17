import React, {useContext} from 'react';
import { Cart } from '../stores/Store';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';

function Card({ product }){

    const {cart, setCart} = useContext(Cart);
    const addItem = ((item)=>{
        setCart([...cart, item]);
    })

    return(
      <Link className='product_landing__single-product' to={`/product/${product? product.id : 1 }`}>
        <div className='product_landing__product-card'>
            <div className='product_landing__card-image'>
                <img className='product_landing__card-img' src={product? product.image : null} alt='product_image' />
            </div>
            <div className='product_landing__product-title'>
                <h3 className='product_landing__title'>{product? product.title: null}</h3>
            </div>
            <div className='product_landing__price-cart'>
                <div className='product_landing__product-price'>
                    <h4 className='product_landing__price'>$ {product? product.price : null}</h4>
                </div>
                <div className='product_landing__button'>
                    <AddButton product={product} addItem={addItem} />
                </div>
            </div>
        </div>
      </Link>
    )
}

export default Card;
