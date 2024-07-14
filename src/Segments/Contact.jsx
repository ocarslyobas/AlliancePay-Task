

import React from 'react';
import './Contact.css';
import contactimage from '../assets/page5/contactimage.png';
import Discovermorearrow from '../assets/page1/Discovermorearrow.png';

const Contact = () => {
  return (
    <div className="form-container" id='contact-session'>


        <div className="form-image">
             <img src={contactimage} alt="loading.." className="contact-form-image" />
        </div>
        <div className="contact">

        <form action="#" method="post">

        <h2>Speak to Sales</h2>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>

            <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" required/>
            </div>

            <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" required/>
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <div class="form-group">
                <input type="checkbox" id="terms" name="terms" required/>
                <label for="terms" className='check-box'> I agree to receiving payment news and trends from Inpay, including updates to our <br/> 
                products and services. I am aware that I can withdraw this consent at any time by <br/> 
                contacting Inpay or unsubscribing via email. I agree to Inpay processing my personal <br/> 
                data in accordance with its Privacy Policy.
                </label>
            </div>
            <button className='Learn-btn'>Learn More <span><img src={Discovermorearrow} alt="loading.." style={{width:20, height:20, color:'#5BFB94'}} /></span></button>
        </form>

            
        </div>  
    </div>
  )
}

export default Contact
