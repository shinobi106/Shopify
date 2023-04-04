import React from 'react'
import "./cart.scss";
import { DeleteOutlined } from '@mui/icons-material';

export const Cart = () => {

   const data = [
    {
        id: 2,
        img: "https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Coat", 
        isNew: true,
        oldPrice: 19,
        price: 12,
        desc: "Duis laboris eu eu irure velit esse quis et do."
    },
   ]     

  return (
    <div className='cart'>
        <h1>Your Cart</h1>
        {data?.map(item=> (
            <div className='item' key={item.id}>
                <img src={item.img2} alt=''/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 100)}</p>
                    <div className='price'>
                        1 X ${item.price}
                    </div>
                </div>
                <DeleteOutlined className='delete'/>
            </div> 
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>$199</span>
        </div>
        <button>CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}
