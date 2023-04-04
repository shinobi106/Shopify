import React, { useState } from 'react'
import "./products.scss";
import { List } from "../../components/List/List"
import { useParams } from 'react-router-dom';

export default function Products() {

  const catId = parseInt(useParams().id)
  const [ maxPrice, setMaxPrice ] = useState(1000)
  const [ sort, setSort ] = useState(null)

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>Torso</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='2' value={2}/>
            <label htmlFor='2'>Waist</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='3' value={3}/>
            <label htmlFor='3'>Footwear</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>$2</span>
            <input type='range' min={2} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>${maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor='asc'>Price (Lowest First)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' value="asc" name='price' onChange={e=>setSort("desc")}/>
            <label htmlFor='desc'>Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src='https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg' alt=''/>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
