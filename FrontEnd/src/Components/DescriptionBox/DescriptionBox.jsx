import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigation">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p className="">
          Our E-Commerce Platform is a modern, user-friendly online shopping
          destination where customers can discover and purchase a wide variety
          of high-quality products — from fashion and electronics to home
          essentials and more. Designed with speed, security, and simplicity in
          mind, our website ensures a seamless shopping experience across all
          devices. Users can browse trending collections, view product details
          with high-resolution images, compare prices, read reviews, and enjoy
          smooth checkout with multiple secure payment options.
        </p>
        <p className="">
            Whether you're a casual shopper or a serious buyer, our platform brings you the convenience of online shopping backed by fast delivery, responsive support, and real-time order tracking.


        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
