import React, { createContext, useContext, useState } from "react";
// import firebase from "firebase";
// import "firebase/firestore";
// import { getFirestore } from "../../Firebase/firebase";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [totalPay, setTotalPay] = useState([]);

  const addItem = (item) => {
    const index = carrito.findIndex((i) => i.id === item.id);
    if (index > -1) {
      const oldQy = carrito[index].quantity;
      carrito.splice(index, 1);
      setCarrito([...carrito, { ...item, quantity: item.quantity + oldQy }]);
    } else {
      setCarrito([...carrito, { ...item, quantity: item.quantity }]);
    }
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

  const generarOrden = (e) => {
    e.preventDefault();
    const orden = {};
    // orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    // Esto habria que poner con inputs
    orden.buyer = { nombre: "Romi", email: "r@gmail.com", tel: "22222" };
    orden.total = totalToPay();
    orden.items = carrito.map((cartItem) => {
      return {
        id: cartItem.id,
        nombre: cartItem.name,
        cantidad: cartItem.quantity,
        precio: cartItem.price * cartItem.quantity,
      };
    });
    return console.log(orden);
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
        generarOrden,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
