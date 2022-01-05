import React from "react";
import { useState } from "react";
import "./Counter.css";

function ItemCount({ stock = 1, onAdd }) {
  const [counter, setCounter] = useState(1);

  const handlerClickLess = () => {
    setCounter(counter - 1);
    if (counter < 0) {
      alert("Ops...No puedes ingresar un número menor a 0");
      setCounter(0);
    }
  };
  const handlerClickMore = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter-wrapper">
      <div className="button" onClick={handlerClickLess}>
        <i className="fas fa-angle-left"></i>
      </div>
      <input value={counter} />
      <div className="button" onClick={handlerClickMore}>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
}

export default ItemCount;
