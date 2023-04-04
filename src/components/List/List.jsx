import React from 'react'
import "./list.scss";
import { Card } from "../Card/Card"


export const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/11569311/pexels-photo-11569311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/13833041/pexels-photo-13833041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Graphic T-shirt", 
            isNew: true,
            oldPrice: 119,
            price: 109,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat", 
            isNew: true,
            oldPrice: 499,
            price: 449,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2388236/pexels-photo-2388236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt", 
            oldPrice: 59,
            price: 45,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/936038/pexels-photo-936038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hats", 
            oldPrice: 19,
            price: 12,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Shirts", 
            oldPrice: 99,
            price: 79,
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/3724358/pexels-photo-3724358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Leather Jackets", 
            oldPrice: 399,
            price: 349,
        }
    ]
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}
