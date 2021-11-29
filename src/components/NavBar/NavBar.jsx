import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="nav-bar"
    >
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          <img
            src="/logo coral navbar.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              to={"/categoria/posavasos"}
              className="item-menu"
            >
              Posavasos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"categoria/cuadros"}
              className="item-menu"
            >
              Cuadros
            </Nav.Link>
            <Nav.Link as={NavLink} to={"categoria/otros"} className="item-menu">
              Otros
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
