import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Counter, { CounterContext } from "../Counter/Counter";
import { useCartContext } from "../CartContext/CartContext";
import ItemCount from "../Counter/Counter";

const ItemDetail = ({ producto }) => {
  const [counter, setCounter] = useState(1);
  // ojo que aca le cambie el[]
  const { addItem, carrito } = useCartContext();
  const price = producto.price;

  const addToCart = () => {
    addItem({ ...producto, quantity: counter });
  };

  //  Lo comento pq no anda y seria para asociarlo con Counter y poner el numero que se quiere de productos desde aca
  // function onAdd(cant) {
  //   setCount(cant);
  //   agregarProducto({ item: producto, cantidad: cant });
  //   console.log(carrito);

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
        {/* Lo oculto pq no pude hacer que me ande  */}
        {/* <ItemCount onAdd={onAdd} count={count} /> */}
      </Col>
    </Row>
  );
};

export default ItemDetail;
