import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
export const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus tenetur, vel veritatis architecto eveniet aspernatur laborum est! Qui ad aut soluta animi nam aspernatur omnis odio excepturi neque dicta.
             </p>
             <div className="footer-secial-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
            </div>
            <div className="footer-content-center">
              <h2>Company</h2>
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
               <h2> Get in touch</h2>
               <ul>
                   <li>+1-212-456-7890</li>
                   <li>help@Tomato.com</li>
               </ul>
            </div>

        </div>
        <hr />
          <p className="footer-copyright"> Copyright 2024 &copy; 2021Tomato.com.All rights reserved</p>
    </div>
  )
}
