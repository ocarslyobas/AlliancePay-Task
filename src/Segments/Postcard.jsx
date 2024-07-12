import React from 'react';
import './Postcard.css';
import { womanwithlaptop,Allianzlogo,Discovermorearrow } from '../assets/imgAssets.Js';


const Postcard = () => {
  return (
    <div className='postcard-container'>
      <div className="card1">
            <div className="card1-content">
                <div className="headers-text">
                    <p>The human-powered payments network</p>
                </div>
                <div className="p-text">
                    <p> Driven by a team of over 200 global payments experts
                        with absolute dedication to solving our customers’ most 
                        complex cross-border payments challenges.
                    </p>
                </div>
                
                <button className='Learncard-btn'> <span><img src={Discovermorearrow} alt="loading" style={{width:10, height:10}} /></span></button>
                    
                
            </div>
      </div>
      <div className="card2">
            <div className="card2-logo">
                <img src={Allianzlogo} alt="loading" />
            </div>
            <img src={womanwithlaptop} alt="loading" className="card2-img" />
      </div>
    </div>
  )
}

export default Postcard

