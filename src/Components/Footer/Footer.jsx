import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
         <h2 className='logo'>FreshToYourDoor</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore quaerat vitae minus. Nihil maiores unde veritatis illum eligendi distinctio incidunt labore minus excepturi? Excepturi doloribus voluptate consequatur error corrupti.</p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1-412-546-7898</li>
            <li>contact@FreshToYourDoor.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FreshToYourDoor.com -All Right Reserved</p>
    </div>
  )
}

export default Footer
