
import React from 'react';
import './Sectors.css';
import Sectorimage1 from '../assets/page4/Sectorimage1.png';
import Sectorimage2 from '../assets/page4/Sectorimage2.png';
import Sectorimage3 from '../assets/page4/Sectorimage3.png';
import Sectorimage4 from '../assets/page4/Sectorimage4.png';

const Sectors = () => {
  return (
    <div className='sectors-container'>

        <div className="sector-textcontent">
            <p className="header">
                Sectors we serve
            </p>
            <p className="paragraph-text">
                We simplify the complexities of cross-border payments in some of the world’s most demanding sectors. 
                Learn more about who we serve and how we add value below.
            </p>
        </div>

        <div className="sector-images">
            <img src={Sectorimage1} alt="loading.." className="sector-img" />
            <img src={Sectorimage2} alt="loading.." className="sector-img" />
            <img src={Sectorimage3} alt="loading.." className="sector-img" />
            <img src={Sectorimage4} alt="loading.." className="sector-img" />
        </div>

        <div className= 'banner'>
            <p className='banner-head'>2023 Annual Report</p>
            <p className='banner-text'>
                Click below to read more about Inpay’s impressive year-on-year growth and to download the full report.
            </p>
        </div>
      
    </div>
  )
}

export default Sectors
