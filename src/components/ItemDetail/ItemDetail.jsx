import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Counter from "../Counter/Counter";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ producto }) => {
  const [count, setCount] = useState(1);
  const [carrito, setCarrito] = useContext(CartContext);

  function agregarProducto() {
    const temporal = carrito;
    temporal.push({ ...producto, cantidad: count });
    setCarrito(temporal);
    console.log(carrito);
  }

  // function onAdd(cant) {
  //   setCount(cant);
  //   agregarProducto();
  // }

  return (
    <Row>
      <Col lg="6">
        <img src={producto.image} alt={producto.name} />
      </Col>
      <Col lg="6" className="card-details-text">
        <h2>{producto.name}</h2>
        <h3>$UY{producto.price}</h3>
        <p>{producto.description}</p>
        <Counter />
        <Button variant="primary" onClick={agregarProducto}>
          Agregar al carrito
        </Button>
      </Col>
    </Row>
  );
};

export default ItemDetail;
