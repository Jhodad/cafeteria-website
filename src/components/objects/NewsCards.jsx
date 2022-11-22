import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import "./NewsCards.css"
// ^ default image

export function NewsCards(params) {

    return (
        <Container fluid="true" className="NC-cardContainer">
            <Container className="NC-cardTitle">
                <h1 className="NC-text">{params.name}</h1>
            </Container>

            <Container className="NC-mediaContainer" fluid="true">
                {/* <MediaDisplay pCollectionURL={coverURL}/> */}
                <Image className="NC-img" fluid="true" src={params.img} />
                {
                    // console.log("ASUIDQWU: " + title)
                }

                <Container fluid="true" className="NC-mediaText">{params.msg}</Container>
            </Container>

            <Container fluid="true" className="NC-cardContent">

                <Container fluid="true" className="NC-cardBody">
                    <p className="NC-textOverflow">{params.body}</p>
                    {/* <span fluid="true" className="NC-span" >CONOCER MAS</span> */}
                </Container>

            </Container>

        </Container >
    )
}


