import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Timestamp, collection, writeBatch } from "firebase/firestore";
import "./CheckoutForm.scss";

const CheckoutForm = ({onConfirm}) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handSubmit = (e) => {
    e.preventDefault();
    console.log('Datos:',name);
    const userData ={
      name, phone, email
    }
    onConfirm(userData)
  }
  return (
    <div className="CheckoutForm">
      <form onSubmit={handSubmit}>
        <div className="container">
          <div className="col2">
            <label>Name</label>
            <input
              className="inputname"
              type="text"
              id="name"
              value={name}
              onChange={({target}) => setName(target.value)}
            />
            <label>Phone</label>
            <input
              className="expire"
              type="text"
              id="phone"
              value={phone}
              onChange={({target}) => setPhone(target.value)}
            />
            <label>Email</label>
            <input
              className="number"
              type="text"
              id="email"
              value={email}
              onChange={({target}) => setEmail(target.value)}
            />
            <button type="submit" className="buy">
              <i className="material-icons">Generate Order</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
