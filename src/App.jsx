import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]); // Adiciona o item com quantidade inicial de 1
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const updateQuantity = (index, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = newQuantity; // Atualiza a quantidade do item
      return updatedItems;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={
            <>
              <Header cartCount={cartItems.length} />
              <ProductListingPage addToCart={addToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header cartCount={cartItems.length} />
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity} // Passa a função de atualizar a quantidade
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
