import React from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

const Hero = () => {
  return (
    <Carousel className="hero-carousel">
      <Carousel.Item className="hero-carousel-item">
        <img src="./imgs carrusel/artist.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="hero-carousel-item">
        <img src="./imgs carrusel/home.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="hero-carousel-item">
        <img src="./imgs carrusel/plantas.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
