import React, { useState } from 'react'
import "./product.scss"
import { AddShoppingCart } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import { Balance } from '@mui/icons-material';

export default function Product() {

  const [ selectedImg, setSelectedImg ] = useState(0);
  const [ quantity, setQuantity ] = useState(1);

  const images = [
    "https://images.pexels.com/photos/11569311/pexels-photo-11569311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3776191/pexels-photo-3776191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt=''/>
        </div>
      </div>
      <div className='right'>
        <h1>Long Sleeve Graphic Tshirt</h1>
        <span className='price'>$79</span>
        <p>Esse ullamco voluptate ex ad sunt sunt amet proident labore.
         Tempor occaecat amet dolore ex ipsum.
         Ipsum ad amet minim excepteur aliquip exercitation tempor laborum sint enim. Sit quis veniam deserunt excepteur Lorem nisi anim nisi qui. Pariatur culpa tempor laborum ipsum sunt. 
        Excepteur excepteur pariatur ex officia.</p>
        <div className='quantity'>
          <button onClick={() => quantity > 1 && setQuantity(prev=>prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCart /> ADD
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorder /> ADD TO WISHLIST
          </div>
          <div className='item'>
            <Balance /> COMPARE
          </div>
        </div>
        <div className='info'>
          <span>Vendor: Gucci</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
