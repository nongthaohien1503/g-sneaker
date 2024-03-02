import React, { useState, useEffect } from 'react'
import '../App'
import { API_URL } from '../API'
import axios from 'axios'
import { useAppContext } from './context/appContext'

function ProductList() {
  const [products, setProducts] = useState([]);

  const { addToCart } = useAppContext();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const pros = res.data;
        const newPros = pros.map((item) => {
          let newItem = { ...item, qty: 0 }
          return newItem
        })
        setProducts(newPros)
      })
      .catch(err => console.log(err));
  }, []);

  return <div className='product_list'>
    {products.map((product) => (
      <div key={product.id}>
          <div className='product'>
            <div>
              <img src={product.product_img} alt="#" />
            </div>
            <div><h4>{product.product_name}</h4></div>
            <div>{product.product_description}</div>
            <div>
              <h4>${product.product_price}</h4>
              <button className='cart_bt' onClick={() => { addToCart(product, 1) }}>
                ADD TO CART
              </button>
            </div>
            </div>
        </div>
    ))}
  </div>;
}

export default ProductList;