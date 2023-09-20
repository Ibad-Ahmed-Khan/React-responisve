import React from "react";
import "./Cart.css";

export const Cart = ({ cartItems }) => {
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
              <button className="del-btn">delete</button>
            </li>
          );
        })}
      </ol>
      <div className="total-price">
        <h2>total price</h2>
      </div>
    </div>
  );
};
