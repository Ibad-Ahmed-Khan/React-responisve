import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="Nav-parent">
      <ul>
        <Link to="/shop">shop</Link>
        <Link to="/cart">cart</Link>
      </ul>
    </div>
  );
};
