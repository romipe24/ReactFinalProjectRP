import React, { useContext, useEffect, useState } from "react";
import { Col, Container, ListGroup, Row, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const [carrito] = useContext(CartContext);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    let subtotal = 0;
    carrito.map((producto) => {
      subtotal = subtotal + producto.price;
    });
    setTotal(subtotal);
  }, []);

  return (
    <Container style={{ alignItems: "center" }}>
      {carrito.map((producto) => {
        console.log(producto);
        return (
          <ListGroup>
            <Row>
              <Col xs={6} md={3}>
                <Image src={producto.image} width="100px" />
              </Col>
              <Col xs={6} md={3}>
                <h1>{producto.name}</h1>
              </Col>
              <Col xs={6} md={3}>
                {producto.cantidad}
              </Col>

              <Col xs={6} md={3}>
                $UY {producto.price}
              </Col>
            </Row>
          </ListGroup>
        );
      })}
      <h1> Total a pagar: {total} </h1>
    </Container>

    //para cuando no hay items
    // <Card className="card-cart" body>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
    //         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    //     </svg>
    // <h3>No tienes productos en el carrito</h3>
    //     <h6>Añade algo </h6>
    // </Card>
  );
};

export default Cart;
