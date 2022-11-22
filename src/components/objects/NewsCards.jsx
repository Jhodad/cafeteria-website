import React, { useEffect, Component, useState } from "react";
import { Container, Image, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./NewsCards.css"
// ^ default image

export function NewsCards(params) {

    const [expanded, setExpanded] = useState(false)
    const [dropDownName, setDropDownName] = useState("Choose your size:");

    const [title, setTitle] = useState();
    const [coverURL, setCoverURL] = useState();
    const [body, setBody] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    //Do stuff on load
    useEffect(() => {
        createCard();
    }, [])

    const setToggle = () => {
        setExpanded(!expanded)
    }

    function createCard() {
        setTitle(params.pTitle);
        setCoverURL(params.pCoverURL)
        setBody(params.pBody);
        setDate(params.pDate);
        setTime(params.pTime);
    }

    return (
        <Container fluid="true" className="NC-cardContainer">
            <Container className="NC-cardTitle">
                <h1 className="NC-text">{title}</h1>
            </Container>

            {!expanded &&
                <Container className="NC-mediaContainer" fluid="true">
                    {/* <MediaDisplay pCollectionURL={coverURL}/> */}
                    <Image className="NC-img" fluid="true" src={coverURL} />
                    {
                        console.log("ASUIDQWU: " + title)
                    }

                    <Container fluid="true" className="NC-mediaText">{date}, {time}</Container>
                </Container>
            }

            <Container fluid="true" className="NC-cardContent">

                <Container fluid="true" className="NC-cardBody">
                    <p className="NC-textOverflow">{body}</p>
                    <span fluid="true" className="NC-span" onClick={() => setToggle()}>CONOCER MAS</span>
                </Container>

            </Container>

        </Container >
    )
}



export function NewsCardsHead(params) {

    const [expanded, setExpanded] = useState(false)
    const [dropDownName, setDropDownName] = useState("Choose your size:");

    const [title, setTitle] = useState();
    const [coverURL, setCoverURL] = useState();
    const [body, setBody] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();


    //Do stuff on load
    useEffect(() => {
        createCard();
    }, [])

    const setToggle = () => {
        setExpanded(!expanded)
    }

    function createCard() {
        setTitle(params.pTitle);
        setCoverURL(params.pCoverURL)
        setBody(params.pBody);
        setDate(params.pDate);
        setTime(params.pTime);

    }

    return (
        <Container fluid="true" className="NC-cardContainerHead">
            <Container className="NC-cardTitle">
                <h1 className="NC-text">{title}</h1>
            </Container>

            {!expanded &&
                <Container className="NC-mediaContainer" fluid="true">
                    {/* <MediaDisplay pCollectionURL={coverURL}/> */}
                    <Image className="NC-img" fluid="true" src={coverURL} />

                    <Container fluid="true" className="NC-mediaText">{date}, {time}</Container>
                </Container>
            }

            <Container fluid="true" className="NC-cardContent">

                <Container fluid="true" className="NC-cardBody">
                    <p className="NC-textOverflow">{body}</p>
                    <span fluid="true" className="NC-span" onClick={() => setToggle()}>CONOCER MAS</span>
                </Container>

            </Container>

        </Container >
    )
}
