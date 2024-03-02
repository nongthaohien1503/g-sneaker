import React, { useState, useEffect } from 'react'
import '../App'
import { API_URL } from '../API'
import axios from 'axios'
import CartItem from './CartItem'
import { useAppContext } from './context/appContext'

const Cart = () => {
    const [product, setProducts] = useState([]);

    const {cart} = useAppContext();

    useEffect(() => {
        axios
        .get(API_URL)
        .then((res) => {
          const products = res.data;
          const newProducts = products.map((item) => {
            let newItem = {...item, qty : 0}
            return newItem
          })
          setProducts(newProducts)
        })
        .catch(err=>console.log(err));
      }, []);
    

    return <div className='cart_list'>
        {cart.length > 0 ? cart.map((item) => (
        <>
        {item.qty > 0 ? (<CartItem item={item}/>): null}
        </>
        )) : (<h2>Your cart is empty.</h2>)}
    </div>
    
}

export default Cart