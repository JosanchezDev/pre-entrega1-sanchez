import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
});


export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([]);
    const [total,setTotal]=useState(0);
    const [amount,setAmount]=useState(0);

    //console.log('Valores del cart',cart);

    const addItem = (item, quantity) => {
        //console.log(item, quantity);
        if(!isInCart(item.id)){
            setCart(prev =>[...prev, {...item, quantity}]);
            setTotal(total+quantity);
            
        }else{
            console.error('El producto ya fue agregado');
        }

    }

    const amountAll=(price)=>{
        console.log(amount,price)
        setAmount(amount+parseInt(price))
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod=>prod.id !== itemId);
        setCart(cartUpdate);
    }

    const clearCart = () =>{
        setCart([]);
        setTotal(0);
    }

    const isInCart=(itemId)=>{
        return cart.some(prod=>prod.id === itemId);
     }
    /*const onAdd=(quantity)=>{
        setCount(quantity);
    } */


    return(
        <CartContext.Provider value={{cart, addItem, removeItem, isInCart,total,amountAll, amount,clearCart}}>
            {children}
        </CartContext.Provider>
    );
}