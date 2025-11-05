// src/Components/CartItems.jsx

import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assest/cart_cross_icon.png';

function CartItems() {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitem-formet-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-formet">
                <img src={e.image} className="carticon-product-icon" alt={e.name} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  alt="remove"
                  onClick={() => removeFromCart(e.id)}
                  className="cartitems-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1 className="">Cart Totals</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                 <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className="">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p className="">If You Have a  Promo Code , Enter It Here</p>
            <div className="cartitems-promobox">
                <input type='text' placeholder='promo code ' />
                <button className="">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
