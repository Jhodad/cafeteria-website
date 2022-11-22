import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Contact.css"
import c1 from "./../localAssets/coffee1.jpg"
import c2 from "./../localAssets/coffee2.jpg"
import c3 from "./../localAssets/coffee3.jpg"
import c4 from "./../localAssets/coffee4.jpg"
import waLogo from "./../localAssets/whatsapp-logo-transparent.png"
import emailLogo from "./../localAssets/email-logo-transparent.png"
import fbLogo from "./../localAssets/fb-logo-transparent.png"
import instaLogo from "./../localAssets/insta-logo-transparent.png"

function Contact() {


    return (
        <div>
            
            <Container className="body-splitter-xs" />

            <Container fluid="true" className="shop-banner">
                <h1>Nuestras redes sociales</h1>
            </Container>

            <Container className="body-splitter-xs" />

            <Container fluid="true" className="page-holder-full">
                <Row fluid="true" className="contact-row">
                    <Col fluid="true" className="contact-column" xl>
                        <Container fluid="true" className="contact-SN">
                            <Image className="contact-img-l" src={c3} />
                            <Row  fluid="true"  className="contact-overlay-l">
                                <Image className="contact-SM-logo" src={instaLogo} />
                                <Container  fluid="true"  className="contact-SM-logo-text">
                                    <h1>INSTRAGRAM</h1>
                                </Container>
                            </Row>
                        </Container>
                    </Col>

                    <Col fluid="true" className="contact-column" xl>
                        <Container fluid="true" className="contact-SN">
                            <Image className="contact-img-r" src={c4} />
                            <Row  fluid="true"  className="contact-overlay-r">
                                <Image className="contact-SM-logo" src={fbLogo} />
                                <Container  fluid="true"  className="contact-SM-logo-text">
                                    <h1>FACEBOOK</h1>
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                </Row >
            </Container>




            <Container fluid="true" className="page-holder-full">
                <Row fluid="true" className="contact-row2">
                    <Col fluid="true" className="contact-column" xl>
                        <Container fluid="true" className="contact-SN">
                            <Col fluid="true" className="contact-column2" xl>
                                <Image className="contact-logo" src={waLogo} />
                                <input className="wa-input"></input>
                                <Button className="contact-btnSend-w">ENVIAR WHATSAPP</Button>
                            </Col>
                        </Container>
                    </Col>

                    <Col fluid="true" className="contact-column" xl>
                        <Container fluid="true" className="contact-SN">
                            <Col fluid="true" className="contact-column2" xl>
                                <Image className="contact-logo" src={emailLogo} />
                                <input className="e-input"></input>
                                <Button className="contact-btnSend-e">ENVIAR EMAIL</Button>
                            </Col>
                        </Container>
                    </Col>
                </Row >
            </Container>




            {/* 
            <Container fluid="true" className="page-holder-full">
                <Row fluid="true" className="contact-row">
                    <Col fluid="true" className="contact-column" xl>
                        <Image className="contact-logo" src={waLogo} />
                        <input className="wa-input"></input>
                        <Button className="btn-send">ENVIAR</Button>
                    </Col>
                    <Button className="btn-send">ENVIAR</Button>


                    <Col fluid="true" className="contact-column" xl>
                        <Image className="contact-logo" src={emailLogo} />
                        <input className="wa-input"></input>
                    </Col>
                    <Button className="btn-send">ENVIAR</Button>
                </Row >
                <Container className="body-splitter-sm" />

            </Container> */}

        </div>
    );
}

export default Contact;