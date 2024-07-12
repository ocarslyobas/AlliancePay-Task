import React from 'react';
import './Postcard2.css';
import { Allianzlogo,tabimage } from '../assets/imgAssets.Js';


const Postcard2 = () => {
  return (
    <div className='Postcard2-container'>

        <div className="card1-container">
                <div className="card1-logo">
                    <img src={Allianzlogo} alt="loading" className="card1-logo" />
                </div>
                <img src={tabimage} alt="loading" className="card1-img" style={{width:600}} />
        </div>

    
      
      <div className="card2-container">    
            <p className="card2-header">One portal, <br /> every transaction</p>
      
            <p className="card2-text">
            <ul>
                <li>Real-time, 24/7, 365 transaction tracking</li>
                <li>Customizable & downloadable reports</li>
                <li>Rich data analysis</li>
                <li>Multiple integration methods, built to suit your needs</li>
            </ul>
            </p>
                
      </div>
      
    </div>
  
  )
}

export default Postcard2
