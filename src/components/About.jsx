import React, { Component } from "react";
import { Container, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/nc2.png" className="header-image" />
        <Container>
          <Col xs={12} sm={8} smOffset={2}></Col>
          <Image src="assets/nc.jpg" className="about-profile-pic" />
          <h3>This is it!</h3>
          <p> prueba! </p>
          <p> asdasdasd </p>
          <p> asdasdasd </p>
          <p> asdasdasd </p>
          <p> asdasdasd </p>
        </Container>
      </div>
    );
  }
}
