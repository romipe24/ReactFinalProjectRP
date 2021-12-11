import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <h2> Cargando</h2>
      <div className="loader-container">
        <div className="dot d1"></div>
        <div className="dot d2"></div>
        <div className="dot d3"></div>
      </div>
    </>
  );
};

export default Loader;
