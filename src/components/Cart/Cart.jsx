import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import veg from './veg.png'
import "./Cart.scss";

const Cart = () => {
  const { cart, addItem, removeItem, isInCart, total, amount,clearCart } =useContext(CartContext);
  const [totalPrice,setTotalPrice] =useState(0);    
  const processSubTotal=() => {
    cart.map((p)=>{
        setTotalPrice(p.price+totalPrice)
    })
  }

  return (
    <div className="Cart">
      <div className="Cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <Link to="/categories"><h5 className="Action" onClick={clearCart}>Remove all</h5></Link>
        </div>
        { 
        cart.map((p) => (
            
          <div className="Cart-Items" key={p.id}>
            <div className="image-box">
              <img src={p.thumb} style={{ height: "120px" }} />
            </div>
            <div className="about">
              <h1 className="title">Categoria:{p.category}</h1>
              <h3 className="subtitle">Detalle pedido {p.name}</h3>
              <img src={veg} style={{ height: "30px" }} />
            </div>
            <div className="prices">
              <div className="amount">${p.price}</div>
              <div className="save">
                <u>Save for later</u>
              </div>
              <div className="remove">
                <u>Remove</u>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">{cart.length} Ordenes</div>
            </div>
            <div className="total-amount">${amount}</div>
          </div>
          <Link to="/checkout" className="button-link">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
