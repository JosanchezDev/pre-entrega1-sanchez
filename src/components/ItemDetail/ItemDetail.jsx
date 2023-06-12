import React, { useContext, useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ItemDetail.scss";
import { CartContext } from "../context/CartContext";

const ItemDetail = () => {
  const { addItem, amountAll } = useContext(CartContext);
  const [detail, setDetail] = useState();
  const [msg, setMsg] = useState(".......Cargando");
  const { itemid } = useParams();
  /* const [increment, setIncrement]=useState(0);
  const [decrement, setDecrement]=useState(0); */
  const [hidden, setHidden] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const docRef = doc(db, "category", `${itemid}`);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        //console.log("Document data:", doc.data());
        setDetail(doc.data());
      } else {
        console.log("Documento Vacio");
      }
    });
  }, []);
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handOnAdd = () => {
    if ((quantity) => 0) {
      setHidden(true);

      const item = {
        id: detail.idMeal,
        name: detail.strMeal,
        price: detail.price,
        category: detail.categoriesId,
        count: quantity,
        thumb: detail.strMealThumb,
      };
      addItem(item, quantity);
      amountAll(detail.price);
    } else {
      setHidden(false);
    }
  };

  if (!detail) return <p>Cargando</p>;
  return (
    <div className="card">
      <div className="photo">
        <img src={detail.strMealThumb} alt="#" />
      </div>
      <div className="description">
        <h2>{detail.strMeal}</h2>
        <h4>Popular House Plant</h4>
        <h1>${detail.price}</h1>
        <p>
          Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
          planter with a blue & red ribbom and butterfly pick.
        </p>

        {hidden ? (
          <div>
            <h4>Categoria:{detail.categoriesId}</h4>
            <h4>Descripcion:{detail.strMeal}</h4>
            <h4>Precio:{detail.price}</h4>
            <Link to="/cart" className="button-link">
              Terminar
            </Link>
          </div>
        ) : (
          <div className="button-container">
            <button onClick={handOnAdd}>Adicionar al Carrito</button>
            <button className="action" onClick={decrement}>
              -
            </button>
            <h4 className="action">{quantity}</h4>
            <button className="action" onClick={increment}>
              +
            </button>
            {/* <div className="button-container">
              <button>Button 1</button>
              <button>Button 2</button>
              <button>Button 3</button>
            </div> */}
            
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default ItemDetail;
