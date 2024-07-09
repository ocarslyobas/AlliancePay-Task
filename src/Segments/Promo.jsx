import React from 'react';
import './Promo.css';
import redcross from '../assets/page1/redcross.png';
import image888 from '../assets/page1/image888.png';
import CIBM from '../assets/page1/CIBM.png';
import Nuvei from '../assets/page1/Nuvei.png';
import moneygramm from '../assets/page1/moneygramm.png';
import Rakbank from '../assets/page1/Rakbank.png';
 

const Promo = () => {
  return (
    <div className='promo-container'>

        <div className="promo-labels">
            <img className='promo-label-images' src={redcross} alt="image loading failed" />
            <img className='promo-label-images' src={image888} alt="image loading failed" />
            <img className='promo-label-images' src={CIBM} alt="image loading failed" />
            <img className='promo-label-images' src={Nuvei} alt="image loading failed" />
            <img className='promo-label-images' src={moneygramm} alt="image loading failed" />
            <img className='promo-label-images' src={Rakbank} alt="image loading failed" />
        </div>
      
    </div>
  )
}

export default Promo
