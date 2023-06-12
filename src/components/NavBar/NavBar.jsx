import React, { useContext, useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
/*import "../style.css";*/
import { Link } from "react-router-dom";
import './NavBar.scss';
import cart  from './cart.png'
import { CartContext } from "../context/CartContext";
const NavBar = () => {

  const { total } = useContext(CartContext);
  return (
    <div className="navbar">
        <div className="navbar-heading">
        <Link to="/"><h1>Gustosito <span>App</span></h1></Link>
        </div>
        <div className="navbar-links">
          <ul>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/categories"><li>Categorias</li></Link>
            <Link to="/cart"><li>Mis Compras</li></Link>
            <li><img src={cart} alt="cart-widget"/>
            <h3>{total}</h3>
            </li>
          </ul>
        </div>
    </div>

  );
};

export default NavBar;
