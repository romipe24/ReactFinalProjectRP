import React from "react";
import {
  Col,
  Container,
  ListGroup,
  Row,
  Image,
  Card,
  Table,
} from "react-bootstrap";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import "firebase/firestore";

const Cart = () => {
  const {
    carrito,
    vaciarCarrito,
    removeItem,
    subtotalProduct,
    totalToPay,
    generarOrden,
    idOrder,
  } = useCartContext();

  return (
    <div>
      {carrito.length === 0 ? (
        <div>
          <Card className="card-cart" body>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <h3>No tienes productos en el carrito</h3>
            <Link to={"/"}>
              <button className="btn-white">Continuar comprando</button>
            </Link>
          </Card>
        </div>
      ) : (
        <Container style={{ alignItems: "center" }}>
          <section>
            {idOrder !== "" && <label>El id de su orden es : {idOrder}</label>}
          </section>
          <Table>
            <thead>
              <tr>
                <th width="60px"> #</th>
                <th width="50px"></th>
                <th width="400px">Nombre</th>
                <th width="200px"> Cantidad</th>
                <th width="200px">Precio</th>
                <th width="200px">Subtotal</th>
                <th width="100px">Borrar</th>
              </tr>
            </thead>
          </Table>

          {carrito.map((producto) => {
            return (
              <Table>
                <tbody>
                  <tr>
                    <td width="60px">{producto.id}</td>
                    <td width="50px">
                      <Image src={producto.image} />
                    </td>
                    <td width="400px">
                      <h3>{producto.name}</h3>
                    </td>
                    <td width="200px">{producto.quantity}</td>
                    <td width="200px"> $UY {parseFloat(producto.price)}</td>
                    <td width="200px">
                      $UY {subtotalProduct(producto.price, producto.quantity)}
                    </td>
                    <td width="100px">
                      <i
                        onClick={() => {
                          removeItem(producto.id);
                        }}
                        className="far fa-trash-alt"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
              // <ListGroup>
              //   <Row>
              //     <Col xs={6} md={3}>
              //       <Image src={producto.image} width="100px" />
              //     </Col>
              //     <Col xs={6} md={3}>
              //       <h1>{producto.name}</h1>
              //     </Col>
              //     <Col xs={6} md={3}>
              //       {/* aca tendria que de alguna forma asociar el counter */}
              //       {producto.quantity}
              //     </Col>

              //     <Col xs={6} md={3}>
              //       $UY {parseFloat(producto.price)}
              //     </Col>
              //     <Col>
              //       $UY {subtotalProduct(producto.price, producto.quantity)}
              //     </Col>
              //     <Col>
              //       <i
              //         onClick={() => {
              //           removeItem(producto.id);
              //         }}
              //         className="far fa-trash-alt"
              //       ></i>
              //     </Col>
              //   </Row>
              // </ListGroup>
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
  );
};

export default Cart;
