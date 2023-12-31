import { createContext, useState } from "react";

export const Cart = createContext();

const Store = ({ children })=>{
    const [cart, setCart] = useState([]);
    return (
        <Cart.Provider value={{cart, setCart}}>
            {children}
        </Cart.Provider>
    )
}

export default Store;