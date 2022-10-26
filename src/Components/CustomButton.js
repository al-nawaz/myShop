import React from 'react';
import './Button.css';

export const CustomButton = ({add}) => {
  return (
    <button className='btn1' onClick={()=>add}>
      Add to Cart
    </button>
  )
}
