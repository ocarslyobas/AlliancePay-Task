import React from 'react';
import './Promo.css';
import { redcross,image888,CIBM,Nuvei,moneygramm,Rakbank } from '../assets/imgAssets.Js';

 

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
