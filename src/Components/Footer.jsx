
import React from 'react';
import './Footer.css';
import Discovermorearrow from '../assets/page1/Discovermorearrow.png';
import Facebookicon from '../assets/page5/Facebookicon.png';
import Twitericon from '../assets/page5/Twitericon.png';
import Instagramicon from '../assets/page5/Instagramicon.png';
import Footericon from '../assets/page5/footericon.png'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="functions">
        <div className="function1">
            <div className="logo-text">
                <div className='nav-logo'><img src={Footericon} alt="loading.." /></div>
                <p className='transalliance'>Transalliance Group</p>
            </div>
            <button className='Learn2-btn'>Contact Us<span><img src={Discovermorearrow} alt="loading.." style={{width:20, height:20, color:'#5BFB94'}} /></span></button>
        </div>
        <div className="function2">
                <h3 id='offices'>Offices</h3>
                <p>Denmark</p>
                <p>Toldbogge 55B</p>
                <p>1253 copahagen</p>
                <p>United Kingdom</p>
                <p>1 Poultry</p>
                <p>EC2R 8EJ London</p>
                <p>Info@Inpay.com</p>
                <p>Phone: +4588610600</p>
        </div>
        <div className="function3">
        <h3 id='Solutions'>Solutions</h3>
                <p>Money Out</p>
                <p>Money In</p>
                
        </div>
        <div className="function4">
        <h3 id='sectors'>Sectors</h3>
                <p>Financial Services</p>
                <p>iGaming</p>
                <p>Cooperates</p>
                <p>NGO'S</p>
        </div>
        <div className="function5">
        <h3 id='Others'>Other</h3>
                <p>About Us</p>
                <p>News & Insights</p>
                <p>1253 copahagen</p>
                <p>Compliance</p>
                <p>Careers</p>
                <p>Contact us</p>
                
        </div>
      </div>
      
      <div className="socials">
        <h3>Socisl Media</h3>
        <div className="social-icins">
            <img src={Facebookicon} alt="loading.." />
            <img src={Twitericon} alt="loading.." />
            <img src={Instagramicon} alt="loading.." />
        </div>
      </div>

    </div>
  )
}

export default Footer
