import React from 'react'
import { createContext } from 'react';
import { useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error("Appcontext must be within appContextProvider");
    }

    return context;
}

const AppContextProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("cart") ? (JSON.parse(localStorage.getItem("cart"))) : [] );

    let [acc_check, setAccCheck] = useState(false)

    const addToCart = (product, quantity) => {
        // find product in list -> (y) => count++ (n) => add
        const oldCart = [...cart];

        const addedproduct = oldCart.find((item) => item.id === product.id)

        if(addedproduct) {
            addedproduct.qty = Math.min(addedproduct.qty += quantity, Math.floor(product.product_qty))

            oldCart[addedproduct] = addedproduct;
            localStorage.setItem("cart", JSON.stringify([...cart]))

        } else {
            product.qty += quantity;
            setCart([...cart, product])

            localStorage.setItem("cart", JSON.stringify([...cart, product]));
        }

        alert("Added!")
    };

    const removeFromCart = (id) => {
        const oldCart = [...cart];

        const newCart = oldCart.filter((product) => product.id !== id)

        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    const removeAllCart = () => {
        setCart([]);

        localStorage.removeItem("cart");
    }

    return (
        <AppContext.Provider value={{ cart, addToCart, removeFromCart, removeAllCart, acc_check, setAccCheck }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;