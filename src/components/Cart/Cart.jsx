import React, { useContext, useEffect, useState } from "react";
import { Col, Container, ListGroup, Row, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {
    carrito,
    vaciarCarrito,
    removeItem,
    subtotalProduct,
    totalToPay,
    generarOrden,
  } = useCartContext();

  return (
    <div>
      {carrito.length === 0 ? (
        <div>
          <h3> Lo siento no tiene elementos en el carrito</h3>
          <Link to={"/"}>
            <button className="btn-white">Continuar comprando</button>
          </Link>
        </div>
      ) : (
        <Container style={{ alignItems: "center" }}>
          {carrito.map((producto) => {
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
                    {/* aca tendria que de alguna forma asociar el counter */}
                    {producto.quantity}
                  </Col>

                  <Col xs={6} md={3}>
                    $UY {parseFloat(producto.price)}
                  </Col>
                  <Col>
                    $UY {subtotalProduct(producto.price, producto.quantity)}
                  </Col>
                  <Col>
                    <i
                      onClick={() => {
                        removeItem(producto.id);
                      }}
                      class="far fa-trash-alt"
                    ></i>
                  </Col>
                </Row>
              </ListGroup>
            );
          })}
          <div className="btn-section">
            <h4>Total a pagar: $UY {totalToPay()}</h4>
            <Link to={"/"}>
              <button className="btn-white">Continuar comprando</button>
            </Link>

            <button className="btn-white btn-delete" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>

            <button className="btn-white btn-delete" onClick={generarOrden}>
              Generar Orden
            </button>
          </div>
        </Container>
      )}
    </div>

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
