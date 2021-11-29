import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Counter from "../Counter/Counter";

const ItemDetail = ({ producto }) => {
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
        <button>Añadir al carrito</button>
      </Col>
    </Row>
  );
};

export default ItemDetail;
