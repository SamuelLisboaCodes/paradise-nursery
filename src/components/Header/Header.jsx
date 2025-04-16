import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ cartCount }) => {
  const logoUrl = "https://cdn-icons-png.flaticon.com/512/1771/1771278.png";
  const cartIconUrl = "https://cdn-icons-png.flaticon.com/512/116/116324.png";
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <img src={logoUrl} alt="Paradise Nursery Logo" className="logo" />
        <div>
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="tagline">Where Green Meets Serenity</p>
        </div>
      </div>

      <div className="center-title">Plants</div>

      <div className="cart" onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
        <img src={cartIconUrl} alt="Cart" className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
