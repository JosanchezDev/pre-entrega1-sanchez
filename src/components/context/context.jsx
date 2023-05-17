import axios from "axios";
import React, { useState, createContext, useContext, useCallback } from "react";


export const MiGlobalContext = createContext();



export const AppContext = ({children})=>{
    const [gift, setGift]=useState([]);
    const[categories, setCategories]=useState([]);
    /*Crreate Callbacks function*/

    /* const fetchHomePageGift=useCallback(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            //console.log(res.data)
        });
    },[]); */

    return
    <MiGlobalContext.Provider >{children}</MiGlobalContext.Provider>
}
//const UserContext = createContext();