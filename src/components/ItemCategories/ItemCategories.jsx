import {getFirestore, doc, getDoc, collection, getDocs} from 'firebase/firestore'
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./ItemCategories.scss"; 
import { Link } from "react-router-dom";
import { db } from '../services/firebase/firebaseConfig';


const ItemCategories = ({ greeting }) => {
  //*const {fetchHomePageGift} = useContext(MiGlobalContext);
  const [categories, setCategories] = useState([]);


  useEffect(()=>{
    //const db=getFirestore();
    const collectionRef = collection(db,"categories");
    getDocs(collectionRef).then((snapshot)=>{
      const categoriesCollection=snapshot.docs.map((item)=>({
        id: item.id,
        ...item.data()
      }));
      setCategories(categoriesCollection);
    });
    
  },[]);


  const [itemid, setItemid] = useState("");

  return (
    <>
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
              <Link
                to={`/productos/${element.strCategory}`}
              ><img src={element.strCategoryThumb} alt="#" /></Link>
                <h4>{element.strCategory}</h4>
                <button>Ver</button>  
                
            </div>
            
          ))
        ) : (
          <h2>No se encontraron las categorias, Inten</h2>
        )}
      </div>
    </div>
    </>
  );
};

export default ItemCategories;
