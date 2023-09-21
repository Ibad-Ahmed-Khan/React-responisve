import React from "react";
import "./Cart.css";

export const Cart = ({ cartItems, setCartItems }) => {
  const del = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id != item.id));
  };

  return (
    <div className="cart-parent">
      <ol className="cart-products">
        <h1>cart products</h1>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => del(item)} className="del-btn">
                delete
              </button>
            </li>
          );
        })}
      </ol>
      <div className="total-price">
        <h2>total products : {cartItems.length}</h2>
        <h2>
          total price :
          {cartItems.map((item) => item.price).reduce((a, b) => a + b, 0)}
        </h2>
      </div>
    </div>
  );
};
