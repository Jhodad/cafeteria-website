import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./About.css"
import NewsGallery from "./../components/controllers/NewsGallery.jsx"

function About() {


  return (
    <div>

      <Container className="body-splitter-xs" />

      <Container fluid="true" className="shop-banner">
        <h1>¿Quienes somos?</h1>
      </Container>

      <Container className="body-splitter-xs" />

      <Container fluid="true" className="page-holder-full">

        <NewsGallery/>

      </Container>


    </div>
  );
}

export default About;