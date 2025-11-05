import React, { useContext } from "react";
import star_icon from "../Assest/star_icon.png";
import star_dull_icon from "../Assest/star_dull_icon.png";
import './ProductsDisplay.css'
import { ShopContext } from "../../Context/ShopContext";

function ProductsDisplay(props) {
  const { product } = props;

  // Corrected function name with lowercase 'a'
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="Main product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star dull" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old"> ${product.old_price}</div>
          <div className="productdisplay-right-price-new"> ${product.new_price}</div>
        </div>
        <div className="productdisplay-right-decs">
          A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or outer
        </div>
        <div className="productdisplay-right-size">
          <h1 className="">Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        {/* Corrected function name used here */}
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tag : </span>Modern, Coming Soon
        </p>
      </div>
    </div>
  );
}

export default ProductsDisplay;
