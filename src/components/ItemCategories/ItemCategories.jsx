import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./ItemCategories.scss"; 
import { Link } from "react-router-dom";

const ItemCategories = ({ greeting }) => {
  //*const {fetchHomePageGift} = useContext(MiGlobalContext);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      
      .then((res) => {
        console.log(res.data.categories);
        setCategories(res.data.categories);
      });
  }, []);
  /* if(!gift) return null; */

  const [itemid, setItemid] = useState("");

  return (
    <div className="ItemCategories">
      <div className="ItemCategories-grid">
        {categories ? (
          categories.map((element) => (
            <div
              className="ItemCategories-categories"
              key={element.idCategory}
              /* onMouseEnter={()=>{
                console.log(gifts.idMeal);
                setItemMealId(gift.idMeal)
                

            }} */
            >
              <img src={element.strCategoryThumb} alt="#" />
              
                <h4>{element.strCategory}</h4>
              
            </div>
          ))
        ) : (
          <h2>No se encontraron las categorias, Inten</h2>
        )}
      </div>
    </div>
  );
};

export default ItemCategories;
