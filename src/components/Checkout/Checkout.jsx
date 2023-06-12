import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Timestamp, addDoc, collection, or } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true)
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      item: cart,
      total: total,
      date: Timestamp.fromDate(new Date()),
    };
    const collectionRef = collection(db, "order");

    const docRef = await addDoc(collectionRef, order);
    setOrderId(docRef.id);
    clearCart();
    setLoading(false);
  };
  if (loading) {
    return <h1>Se esta generando su orden ......</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es : {orderId}</h1>;
  }
  return (
    <div>
      <h1>CheckOut</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
