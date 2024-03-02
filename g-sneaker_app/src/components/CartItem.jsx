import React, { useState } from 'react'
import { useAppContext } from './context/appContext';
import "./Cart";

const CartItem = ({ item }) => {

    const { cart, removeFromCart } = useAppContext();

    const [quantity, setQuantity] = useState(item.qty);

    const incrementQuantity = (id) => {
        const oldCart = [...cart];
        const addedProduct = oldCart.find((item) => item.id === id)
        //quantity check
        addedProduct.qty = Math.min(addedProduct.qty + 1, Math.floor(item.product_qty))
        setQuantity(addedProduct.qty)
        //update cart in local storage
        oldCart[addedProduct] = addedProduct;
        localStorage.setItem("cart", JSON.stringify([...cart]))
    }

    const decrementQuantity = (id) => {
        const oldCart = [...cart];
        const addedProduct = oldCart.find((item) => item.id === id)
        
        addedProduct.qty = Math.max(0, addedProduct.qty - 1)
        setQuantity(addedProduct.qty)

        oldCart[addedProduct] = addedProduct;
        localStorage.setItem("cart", JSON.stringify([...cart]))
    }

    return <>
    {item.qty > 0 ? (
        <div key={item.id} className='product_cart'>
            <img src={item.product_img} alt="#" />
            <h4>{item.product_name}</h4>
            <p>Sumary: ${(item.product_price * quantity)}</p>
            <div className='quantity'>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <p> {quantity} </p>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
            <button className='cart_bt' onClick={() => {removeFromCart(item.id) }}>
                REMOVE
            </button>
        </div> ) : null}
    </>
}

export default CartItem