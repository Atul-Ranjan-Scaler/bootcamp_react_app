import React from "react";


function CartItem({item, deleteItem}){
    return (
        <div className='cart_page__item'>
            <div className='cart_page__item-title'>{item.title}</div>
            <div className='cart_page__item-price'>$ {item.price}</div>
            <div className='cart_page__item-delete' onClick={()=> {deleteItem(item)}}>delete</div>
        </div>
    )
}

export default CartItem;