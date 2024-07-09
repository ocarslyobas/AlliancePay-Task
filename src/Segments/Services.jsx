

import React from 'react';
import './Services.css';
import serviceslovehand from '../assets/page4/serviceslovehand.png';
import servicesnetwork from '../assets/page4/servicesnetwork.png';
import servicessecurity from '../assets/page4/servicessecurity.png';
import servicesexpert from '../assets/page4/servicesexpert.png';
import servicesmain from '../assets/page4/servicesmain.png';

const Services = () => {
  return (
    <div className='services-container'>

        <p className='services-heading'>Our services</p>
      
      <div className="info">
        <div className="first-info">
            <img src={serviceslovehand} alt="loading.." className='info-image' />
            <p className='info-head'>We are your trusted partner</p>
            <p className="infoo-text">We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together</p>
        </div>
        <div className="second-info">
            <img src={servicesnetwork} alt="loading.." className='info-image' />
            <p className='info-head'>We provide the network you need</p>
            <p className="infoo-text">We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed.</p>
        </div>
        <div className="third-info">
            <img src={servicessecurity} alt="loading.." className='info-image' />
            <p className='info-head'>We bring certainty through compliance</p>
            <p className="infoo-text">We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy.</p>
        </div>
        <div className="fourth-info">
            <img src={servicesexpert} alt="loading.." className='info-image' />
            <p className='info-head'>We execute with expertise</p>
            <p className="infoo-text">We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise.</p>
        </div>

      </div>
      <div className="messages-header">
        <p>The Transalliance Group. difference</p>
      </div>
      <div className="messages-text">
        <p>Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.</p>
      </div>
      <div className="messages-images-container">
            <img src={servicesmain} alt="loading" className="messages-images" />
      </div>
    </div>
  )
}

export default Services
