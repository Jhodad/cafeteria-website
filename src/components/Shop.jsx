import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Image, Button } from "react-bootstrap";
import ProductsGallery from "./controllers/ProductsGallery";

function Shop() {

    return (
        <div fluid="true" className="frame" >

            <Container className="body-splitter-sm" />

            <Container className="contact-banner">
                <Image>

                </Image>
            </Container>

            <Container fluid="true" className="page-holder-full">

                <ProductsGallery />
            </Container>
        </div>
    );
}

export default Shop;