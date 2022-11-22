import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Image, Button } from "react-bootstrap";
import ProductsGallery from "./controllers/ProductsGallery";
import "./Shop.css"

function Shop() {

    return (
        <div fluid="true" className="frame" >

            <Container className="body-splitter-xs" />

            <Container fluid="true" className="shop-banner">
                <h1>Disfruta de nuestros productos en cualquier sucursal</h1>
            </Container>

            <Container className="body-splitter-xs" />

            <Container fluid="true" className="page-holder-full">
                <ProductsGallery />
            </Container>
        </div>
    );
}

export default Shop;