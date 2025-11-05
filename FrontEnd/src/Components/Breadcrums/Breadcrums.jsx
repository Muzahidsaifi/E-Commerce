import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assest/breadcrum_arrow.png';

function Breadcrums(props) {
  const { product } = props;

  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="arrow" />
      Shop <img src={arrow_icon} alt="arrow" />
      {product.category} <img src={arrow_icon} alt="arrow" />
      {product.name}
    </div>
  );
}

export default Breadcrums;
