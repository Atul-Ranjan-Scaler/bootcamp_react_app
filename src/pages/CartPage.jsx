import React, { useContext } from "react";
import { Cart } from "../stores/Store";
import CartItem from "../components/CartItem";

function CartPage(){
  const { cart, setCart } = useContext(Cart);

  const deleteItem = ((item)=>{
    setCart(cart.filter((c) => c.id !== item.id))
  })

  return (
    <div className='cart_page'>
      <div className='cart_page__items'>
        {
          cart.map((item)=> <CartItem key={item.id} item={item} deleteItem={deleteItem} /> )
        }
      </div>
    </div>
  )
}

export default CartPage;
