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

  function Saludar() {
    console.log("saludar ");
  }
  return (
    <div className="counter-wrapper">
      <div className="button" onClick={handlerClickLess}>
        <i class="fas fa-angle-left"></i>
      </div>
      <input value={counter} />
      <div className="button" onClick={handlerClickMore}>
        <i class="fas fa-angle-right"></i>
      </div>
      {/* Lo oculto pq no me anda  */}
      {/* <button onClick={onAdd}> Agregar a carrito </button> */}
    </div>
  );
}

export default ItemCount;
