
import React, { useState, createContext } from "react";
import all_product from "./../Components/Assest/all_product";

// Create context
export const ShopContext = createContext();

// Corrected default cart function (use product IDs)
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

 const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = all_product.find(
        (product) => product.id === Number(item)
      );
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
  }
  return totalAmount;
};


const getTotalCartItems=() =>{
  let totalitem=0;
  for(const item in cartItems){
    if(cartItems [item]>0){
      totalitem+= cartItems[item];
    }
  }
  return totalitem;
}

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
