import React from "react";

function AddButton({ product, addItem }){

    return (
        <button className='product_landing__addBtn' onClick={()=>{
                addItem(product)
            }}> Add
        </button>
    )
}

export default AddButton;
