import React from 'react';
import './Buttons.css';
import getstartedarrow from "../../src/assets/page1/getstartedarrow.png";

const Buttons = () => {
  return (
    <div className='btn-div'>
        <button className='btn'> <span className='get'>Get</span> Started 
        <span className='started-icon'>
            <img src={getstartedarrow} alt="" style={{ width: '14px', height: '14px', color:'0F0F0F'}} />
        </span>
        </button>
    </div>
  )
}

export default Buttons
