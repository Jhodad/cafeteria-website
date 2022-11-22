import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./NewsGallery.css"
import { NewsCards } from "../objects/NewsCards";
import profile from "./../../localAssets/profile.jpg"


function NewsGallery() {

    return (
        <div>

            <Row className="NG-row" >

                <Col className="NG-column" xs={6} md={4}>
                    <NewsCards
                        name="Jhodad G."
                        img={profile}
                        body="unTexto"
                        msg="Hola!" />
                </Col>

                <Col className="NG-column" xs={6} md={4}>
                    <NewsCards
                        name="Mariana G."
                        img={profile}
                        body="unTexto"
                        msg="Hola!" />
                </Col>

                <Col className="NG-column" xs={6} md={4}>
                    <NewsCards
                        name="Alejandro G."
                        img={profile}
                        body="unTexto"
                        msg="Hola!" />
                </Col>

            </Row >

        </div >


    )

}

export default NewsGallery;