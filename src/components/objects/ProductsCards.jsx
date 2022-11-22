import React, { useEffect, useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import "./ProductsCards.css"
// ^ default image

export default function ProductsCards(params) {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [price, setPrice] = useState();
    const [size, setSize] = useState();


    //Do stuff on load
    useEffect(() => {
        createCard();
    }, [])

    function createCard() {
        setTitle(params.pTitle);
        setBody(params.pBody);
        setPrice(params.pPrice);
        setSize(params.pSize)
    }

    return (
        // Contenedor toda la Card
        <Container fluid="true" className="PC-cardContainer">

            {/* Contenedor del titulo */}
            <Container className="PC-cardTitle">
                <h1 className="PC-text">{title}</h1>
            </Container>

            {/* Contenedor de la imagen */}
            <Container className="PC-mediaContainer" fluid="true">
                <Container fluid="true">
                    {/* La imagen */}
                    <Image className="NC-img PC-img" fluid="true" src={params.pCollectionURL} alt="" />
                </Container>
                <Container fluid="true" className="PC-mediaText">${price} MXN.</Container>
            </Container>

            {/* Contenedor de los botones de tamaño */}
            <Container className="PC-cardButtons">
                <Button className="PC-sizeButtons">SM</Button>
                <Button className="PC-sizeButtons">MD</Button>
                <Button className="PC-sizeButtons">LG</Button>
            </Container>

            {/* Contenedores del cuerpo o descripcion */}
            <Container fluid="true" className="PC-cardContent">
                <Container fluid="true" className="PC-cardBody">
                    <p className="PC-textOverflow">{body}</p>
                </Container>

            </Container>

        </Container >
    )
}
