import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./ItemListContainer.scss";
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  //*const {fetchHomePageGift} = useContext(MiGlobalContext);
  const [gift, setGift] = useState(null);
  useEffect(() => {
    axios
      /* .get("https://www.themealdb.com/api/json/v1/1/categories.php") */
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
      .then((res) => {
        console.log(res.data.meals);
        setGift(res.data.meals);
      });
  }, []);
  /* if(!gift) return null; */

  const [itemid, setItemid] = useState("");

  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer-grid">
        {gift ? (
          gift.map((gifts) => (
            <div
              className="ItemListContainer-categories"
              key={gifts.idMeal}
              /* onMouseEnter={()=>{
                console.log(gifts.idMeal);
                setItemMealId(gift.idMeal)
                

            }} */
            >
              <Link
                to={`/item/${gifts.idMeal}`}
              ><img src={gifts.strMealThumb} alt="#" /></Link>
              
                <h4>{gifts.strMeal}</h4>
              
            </div>
          ))
        ) : (
          <h2>No se encontraron las categorias, Inten</h2>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
