import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Estilos para a LandingPage

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Redireciona para a ProductListingPage (tela principal)
    navigate("/products");
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">Welcome to Paradise Nursery</h1>
        <p className="description">
          Discover a variety of air-purifying plants to enhance your home and bring peace and freshness to your life. Start your green journey with us!
        </p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
