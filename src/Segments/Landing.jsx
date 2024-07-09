import React from 'react';
import './Landing.css';
import Navbar from '../Components/Navbar';
import Discovermorearrow from '../assets/page1/Discovermorearrow.png';
import Landingpageimage from '../assets/page1/Landingpageimage.png';
import image24 from '../assets/page1/image24.png';
import Travelconceptwithdocuments from '../assets/page1/Travelconceptwithdocuments.png';

const Landing = () => {
  return (
    <div className='landing-container'>

        <div className="nav-content">
            <Navbar/>
        </div>
        <div className="landing-message">
            <div className="landingtext">
                <div className="gold-text">
                    <p>Simplified cross-border payment</p>
                </div>
                <div className="header-text1">
                    <p id='header-text1' >We are the <br/> payments people</p>
                </div>
                <div className="info-text">
                    <p> Transalliance Group.’s cross-border payments solutions connect <br/> 
                        and communities globally to the network they need to thrive.<br/> 
                        Together, we make money move.
                    </p>
                </div>
                <div className="discorver-botton">
                    <button className='discorver-botton'>Discover More <span><img src={Discovermorearrow} alt="" /></span></button>
                </div>

            </div>
            <div className="landingimage">
                    <div className="img24">
                        <img className='img1' src={image24} alt="image-loading" />
                    </div>
                    <div className="landingpageimage">
                        <img className='img2' src={Landingpageimage} alt="image-loading" />
                    </div>
                    
            </div>
        </div>
        <div className="diagonal-line">
            
        </div>

        <div className="base-landing-container">
            <img className="base-landing-image" src={Travelconceptwithdocuments} alt="image-loading" />
        </div>
      
    </div>
  )
}

export default Landing
