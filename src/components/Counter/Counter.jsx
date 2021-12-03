import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const { carrito, agregarProducto } = useContext(CartContext);

  const handlerClickLess = () => {
    setCounter(counter - 1);
    if (counter < 0) {
      alert("Ops...No puedes ingresar un número menor a 0");
      setCounter(0);
    }
  };
  const handlerClickMore = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="counter-wrapper">
      <div className="button" onClick={handlerClickLess}>
        <i class="fas fa-angle-left"></i>
      </div>
      <input value={counter} />
      <div className="button" onClick={handlerClickMore}>
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Counter;
