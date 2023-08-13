import { useState } from "react";
import { AppContext } from "./AppContext";

export const Provider = ({ children }: any) => {
  const [products, setProducts] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = {
    products,
    setProducts,
    isCartVisible,
    setIsCartVisible,
    cartItems,
    setCartItems
  }

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}