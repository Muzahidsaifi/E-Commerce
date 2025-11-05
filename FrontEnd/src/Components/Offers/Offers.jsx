import React from 'react'
import './Offers.css'
import exclusive_img from '../Assest/exclusive_image.png'
function Offers() {
  return (
    <div className="offers">
        <div className="offers-left">
          <h1 className="">Exclusive</h1>
          <h1 className="">Offers For You</h1>
          <p className="">ONLY ON BEST  SELLERS PRODUCTS</p>
          <button className="">Check Now</button>
        </div>
        <div className="offers-right">
         <img  src={exclusive_img} />
        </div>
    </div>
  )
}

export default Offers