import React from "react";
import "./Hero.css";
import hand_icon from "../Assest/hand_icon.png";
import arrow_icon from "../Assest/arrow.png";
import hero_imges from "../Assest/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="">New ARRIVALS ONLY!</h2>
        <div>
          <div className="hand-hand-icon">
            <p className="">New</p>
            <img className="" src={hand_icon}/>
          </div>
          <p className="">Collection</p>
          <p className="">For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div className="">Latest Collection</div>
            <img className="" src={arrow_icon} />
        </div>
      </div>
      <div className="hero-right">
      <img className="" src={hero_imges} />
      </div>
    </div>
  );
}

export default Hero;
