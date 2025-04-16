import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  // Função para calcular o preço total do carrinho
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", "")); // Remove o símbolo '$' do preço
        return total + price * item.quantity; // Multiplica pelo número de itens
      }, 0)
      .toFixed(2); // Arredonda para 2 casas decimais
  };

  const handleContinueShopping = () => {
    navigate("/products"); // Redireciona para a página de produtos
  };

  const handleCheckout = () => {
    alert("Checkout functionality is not yet implemented.");
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item card">
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p> {/* Exibe a quantidade atual */}
              </div>
              <div className="cart-item-actions">
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  <img
                    className="icon-size"
                    src="https://cdn-icons-png.flaticon.com/512/5366/5366933.png"
                    alt="Remove"
                  />
                </button>
                <button
                  className="increase-btn"
                  onClick={() => updateQuantity(index, item.quantity + 1)} // Aumenta a quantidade
                >
                  <img
                    className="icon-size"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbmSznUzHvglZAytNE1w1-yHcTv7mXvW25w&s"
                    alt="Increase"
                  />
                </button>
                <button
                  className="decrease-btn"
                  onClick={() => {
                    if (item.quantity > 1) {
                      updateQuantity(index, item.quantity - 1); // Diminui a quantidade, mas não permite que seja menor que 1
                    }
                  }}
                >
                  <img
                    className="icon-size"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoY-tGho5qar84NUm7w1JFPjA7sUv079Cm2A&s"
                    alt="Decrease"
                  />
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${getTotalPrice()}</h2> {/* Exibe o valor total do carrinho */}
          </div>
        </div>
      )}

      <div className="cart-buttons">
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
