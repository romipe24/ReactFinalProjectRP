import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [totalPay, setTotalPay] = useState([]);

  const addItem = (item) => {
    setCarrito([...carrito, item]);
  };

  const subtotalProduct = (price, quantity) => {
    let subtotal = (price * quantity).toFixed(2);
    return subtotal;
  };

  const totalToPay = () => {
    let total = 0;
    carrito.filter((item) => (total += item.price * item.quantity));
    setTotalPay(total.toFixed(2));
    return totalPay;
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        addItem,
        subtotalProduct,
        removeItem,
        totalToPay,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
