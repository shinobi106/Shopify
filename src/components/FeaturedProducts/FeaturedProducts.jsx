import React from 'react'
import { Card } from '../Card/Card'
import "./FeaturedProducts.scss"

export const FeaturedProducts = ({type}) => {


    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/11569311/pexels-photo-11569311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/13833041/pexels-photo-13833041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Graphic T-shirt", 
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat", 
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2388236/pexels-photo-2388236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt", 
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/936038/pexels-photo-936038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hat", 
            oldPrice: 19,
            price: 12,
        }
    ]
  return (
    <div className='FeaturedProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
            </p>
        </div>
        <div className='bottom'>
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}
