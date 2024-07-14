import React from 'react';
import './About.css';
import { Discovermorearrow,p2manwalking,portraitcorporatewoman1,phoneimage,smiling } from '../assets/imgAssets.Js';


const About = () => {
  return (
    <div className='about-us-container' id='about-session'>

        <div className="about-header">
            <p>About Us</p>
        </div>
        <div className="payment-pathway">
            <h1>Payment pathways, built for you</h1>
        </div>

        <div className='text'>
        
            <p> Transalliance Group. Money Out and Money In solutions give <br />
                our customers the ability to complete cross-border, multi- <br />
                currency transactions securely and at speed. And with a <br /> 
                single provider for both payouts and pay-ins, say goodbye to
                the operational headaches of multi-supplier management
            </p>
        </div>
        <div className="money-out">
                    <button className='moneyout-botton'>Money Out <span><img src={Discovermorearrow} alt="loading" /></span></button>
        </div>
        <div className="image1">
            <img className='img' src={p2manwalking} alt="loading.." />
            <button className='btn1'>SEPA Instant, SEPA & SWIFT</button>
        </div>
        <div className="image2">
            <img className='img' src={portraitcorporatewoman1} alt="loading.." />
            <button className='btn2' >Customer portal for live transaction monitoring</button>
        </div>
        <div className="image3">
            <img className='img3' src={smiling} alt="loading.." />
            <button className='btn3'>Danish FSA regulatedT</button>
        </div>
        <div className="image4">
            <img className='img' src={phoneimage} alt="loading.." />
            <button className='btn4'>90+ currencies served</button>
        </div>

        <div className="learn-container">
            <button className='Learn-btn'>Learn More <span><img src={Discovermorearrow} alt="" /></span></button>
        </div>
      
    </div>
  )
}

export default About
