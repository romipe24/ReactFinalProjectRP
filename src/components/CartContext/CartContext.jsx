import React, { createContext, useContext, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { getFirestore } from "../../Firebase/firebase";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [totalPay, setTotalPay] = useState([]);
  const [idOrder, setIdOrder] = useState("");

  React.useEffect(() => {
    if (idOrder) {
      alert("id order is = " + idOrder);
    }
  }, [idOrder]);

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
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    // Esto habria que poner con inputs
    orden.buyer = { nombre: "Romi", email: "r@gmail.com", tel: "22222" };
    orden.total = totalToPay();
    orden.items = carrito.map((cartItem) => {
      return {
        id: cartItem.id,
        name: cartItem.name,
        quantity: cartItem.quantity,
        price: cartItem.price * cartItem.quantity,
      };
    });

    const dbQuery = getFirestore(); //llamo a Firestore
    //Agrego ordenes
    dbQuery
      .collection("orders")
      .add(orden)
      .then((resp) => setIdOrder(resp.id));

    //Actualiza todos los items que estan en el listado de Cart del CartContext
    const itemsToUpdate = dbQuery.collection("productos").where(
      firebase.firestore.FieldPath.documentId(), //traigo todos los productos de firebase
      "in", //in obtiene elementos por su id
      carrito.map((i) => i.id) // que esten en el carrito
    );

    const batch = dbQuery.batch(); //me crea iuna instancia

    itemsToUpdate
      .get() // los traigo

      .then((collection) => {
        collection.docs.forEach((docSnapshot) => {
          batch.update(docSnapshot.ref, {
            stock:
              docSnapshot.data().stock -
              carrito.find((item) => item.id === docSnapshot.id).quantity,
          });
        });
        batch.commit().then((res) => {
          console.log("se actualizo el stock");
        });
      });
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
