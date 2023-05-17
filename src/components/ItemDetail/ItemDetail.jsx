import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ItemDetail.scss";

const ItemDetail = () => {
  const [detail, setDetail] = useState();
  const { itemid } = useParams();
  console.log("ITEMID=" + itemid);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemid}`)
      .then((res) => {
        console.log(res.data.meals);
        setDetail(res.data.meals);
        console.log("detail=" + detail);
      });
  }, []);
  return (
    <div className="itemDetail">
      {detail ? (
        detail.map((element) => {
          return (
            <div key={element.idMeal} className="itemDetail-grid">
              <img src={element.strMealThumb} alt="#" />
              <p>{element.strMeal}</p>
              <div className="itemDetail-cart">
                <button>+</button>
                <button>Agregar carrito</button>
                <button>-</button>
              </div>
              
              <h4>{element.strInstructions}</h4>
            </div>
          );
        })
      ) : (
        <h4>no se puede</h4>
      )}
    </div>
  );
};

export default ItemDetail;
