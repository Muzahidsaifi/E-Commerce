import React from "react";
import { Link } from "react-router-dom"; // ✅ Link imported
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img className="item-image" onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
