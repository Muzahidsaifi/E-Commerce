import React from 'react'
import './Newsletter.css'


function Newsletter() {
  return (

    <div className="newsletter">
        <h1>Get Exclusive Offer On Your Email:</h1>
        <p>Subscribe to Our  NewsLetter and stay updated...</p>
        <div className="newsletter-input-container">
            <input className="" type='email' placeholder='Your Email Id ' />
            <button className="">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter