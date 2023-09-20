import React, { useEffect, useState } from "react";
import "./Shop.css";
import { json } from "react-router-dom";
import axios from "axios";

export const Shop = () => {
  const [shopData, setShopData] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setShopData(response.data);
    });
  }, []);

  return (
    <div className="shop-parent">
      <div className="total-items">
        <h2>total items</h2>
        <pre>{shopData && JSON.stringify(shopData.length, null, 4)}</pre>
      </div>
      <div className="indivisual-items">
        <h2>indivisual items</h2>
        <div className="products-grid">
          {shopData &&
            shopData.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <button className="shop-btn">add to cart</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
