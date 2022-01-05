import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../CartContext/CartContext";
import ItemCount from "../Counter/Counter";

const ItemDetail = ({ producto }) => {
  const [counter, setCounter] = useState(1);
  const { addItem, carrito } = useCartContext();
  const price = producto.price;

  const addToCart = () => {
    addItem({ ...producto, quantity: counter });
  };

  return (
    <Row>
      <Col lg="6">
        <img src={producto.image} alt={producto.name} />
      </Col>
      <Col lg="6" className="card-details-text">
        <h2>{producto.name}</h2>
        <h3>$UY{parseFloat(price)}</h3>
        <p>{producto.description}</p>
        <ItemCount counter={counter} setCounter={setCounter} />
        <Button variant="primary" onClick={addToCart}>
          Agregar al carrito
        </Button>
      </Col>
    </Row>
  );
};

export default ItemDetail;
