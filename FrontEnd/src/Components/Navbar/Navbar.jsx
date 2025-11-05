import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("shop");

  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>SAIFI</p>
        </div>

        {/* Hamburger icon */}
        <button
          className={`nav-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li onClick={() => setActiveMenu("shop")}>
            <Link to="/">Shop</Link> {activeMenu === "shop" && <hr />}
          </li>
          <li onClick={() => setActiveMenu("men")}>
            <Link to="/mens">Men</Link> {activeMenu === "men" && <hr />}
          </li>
          <li onClick={() => setActiveMenu("women")}>
            <Link to="/womens">Women</Link> {activeMenu === "women" && <hr />}
          </li>
          <li onClick={() => setActiveMenu("kids")}>
            <Link to="/kids">Kids</Link> {activeMenu === "kids" && <hr />}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <div className="cart-wrapper">
              <img src={cart_icon} alt="Cart" />
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
