import {getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./ItemListContainer.scss";
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  //*const {fetchHomePageGift} = useContext(MiGlobalContext);
  const [category, setCategory] = useState([]);
  const { strCategory } = useParams();
  /* useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
      .then((res) => {
        console.log(res.data.meals);
        setGift(res.data.meals);
      });
  }, []); */
  /* if(!gift) return null; */
  useEffect(() => {
    const collectionRef = collection(db,"category");
    console.log(`Valor: ${strCategory}`)
    const q = query(collectionRef, where('categoriesId','==',`${strCategory}`))
    getDocs(q).then((snapshot)=>{
      const categoryCollection=snapshot.docs.map((item)=>({
        id: item.id,
        ...item.data()
      }));
      setCategory(categoryCollection);
    });
  },[]);
  const [itemid, setItemid] = useState("");

  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer-grid">
        {category ? (
          category.map((element) => (
            <div
              className="ItemListContainer-categories"
              key={element.idMeal}
              /* onMouseEnter={()=>{
                console.log(gifts.idMeal);
                setItemMealId(gift.idMeal)
                

            }} */
            >
              <Link
                to={`/item/${element.id}`}
              ><img src={element.strMealThumb} alt="#" /></Link>
              
                <h4>{element.strMeal}</h4>
              
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
