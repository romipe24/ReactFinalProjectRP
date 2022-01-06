import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Item.css";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  /* console.log('Product', product) */
  const { id, image, name, price, category } = product;

  return (
    <Col className="col" lg={3} key={id}>
      <Card>
        <Card.Img className="CardImgSize" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span className="card-price">$UY {price};</span>
          </Card.Text>
          <Button as={NavLink} to={`/detalle/${id}`} className="btn-store">
            Detalle Producto
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
