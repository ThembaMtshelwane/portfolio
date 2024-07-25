import React from "react";
import "./carousel.css";

const Carousel = () => {
  return (
    <section className="carousel-container">
      <ul className="carousel-track">
        <li className="carousel-card">HTML</li>
        <li className="carousel-card">CSS</li>
        <li className="carousel-card">JavaScript</li>
        <li className="carousel-card">TypeScript</li>
        <li className="carousel-card">React</li>
        <li className="carousel-card">NodeJS</li>
        <li className="carousel-card">Express</li>
        <li className="carousel-card">Firebase</li>
        <li className="carousel-card">ChakraUI</li>
      </ul>
    </section>
  );
};
export default Carousel;
