import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // const agregarProducto = (item) => {
  //   setCarrito([...carrito, item]);
  // };

  //no funciona
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider value={[carrito, setCarrito, vaciarCarrito]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
