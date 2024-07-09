import React from 'react'
import './Navbar.css'
import Allianzlogo from '../assets/page1/Allianzlogo.png';
import getstartedarrow from '../assets/page1/getstartedarrow.png';


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-logo'><img src={Allianzlogo} alt="" /></div>
        <div className='nav-listbox'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Solutions</li>
                <li>News&Insights</li>
                <li>ContactUs</li>
                {/* <Buttons/> */}
                <div className='btn-div'>
                <button className='btn'> <span className='get'>Get</span> Started 
                <span className='started-icon'>
                    <img src={getstartedarrow} alt="" style={{ width: '14px', height: '14px', color:'0F0F0F'}} />
                </span>
                </button>
                </div>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
