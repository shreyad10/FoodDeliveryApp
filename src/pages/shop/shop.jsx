import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Yummy Corner</h1>
        <p>"Your favorite food at your door steps"</p>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product  data = {product}/>
        ))}
      </div>
    </div>
  )
}
