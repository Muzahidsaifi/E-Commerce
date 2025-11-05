import React from 'react'
import './Footer.css'
import footer_logo from '../Assest/logo_big.png'
import instagram_icon from '../Assest/instagram_icon.png'
import pintester_icon from '../Assest/pintester_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon.png'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img  src={footer_logo} />
            <p className="">SAIFI</p>
        </div>
        <ul className="footer-links">
           <li className="">Company</li>
           <li className="">Products</li>
           <li className="">Offices</li>
           <li className="">About</li>
           <li className="">Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img  src={instagram_icon} />
            </div>
             <div className="footer-icon-container">
                <img  src={pintester_icon} />
            </div>
             <div className="footer-icon-container">
                <img  src={whatsapp_icon} />
            </div>
        </div>

        <div className="footer-copyright">
            <hr/>
            <p className="">Copyright @ 2025 - All Right Reserved  | Powered by digics.in</p>
        </div>
    </div>
  )
}

export default Footer