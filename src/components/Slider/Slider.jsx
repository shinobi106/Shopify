import { SentimentDissatisfiedSharp } from '@mui/icons-material';
import React, { useState } from 'react'
import "./slider.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Slider = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg",
        "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ]; 

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) =>prev - 1); 
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) =>prev + 1);
      };
    

  return (
    <div className='slider'>
        <div className='container' style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[1]} alt='random'/>
            <img src={data[2]} alt='random'/>
            <img src={data[0]} alt='random'/>
        </div>
       <div className='icons'>
       <div className='icon' onClick={prevSlide}>
           <ArrowBackIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
           <ArrowForwardIcon />
        </div>
       </div>
    </div>
  )
}
