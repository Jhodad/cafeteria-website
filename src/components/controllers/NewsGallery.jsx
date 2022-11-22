import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./NewsGallery.css"
import { NewsCardsHead, NewsCards } from "../objects/NewsCards";
import { db, storage } from "../../config/firebase.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy, limit, where, AND } from "firebase/firestore";


function NewsGallery() {

    const [dataDB, setDataDB] = useState(null);
    const [dataDBSorted, setDataDBSorted] = useState(null);
    const [collectionRef, setCollectionRef] = useState(collection(db, 'noticias'));
    const [retrievedURL, setRetrievedURL] = useState();

    // == Read
    const getDataDB = async () => {
        const collectionSnap = await getDocs(collectionRef);
        setDataDB(collectionSnap.docs.map(
            (doc) => (
                {
                    id: doc.id,
                    titulo: doc.data().titulo,
                    desc: doc.data().desc,
                    fecha: doc.data().fecha,
                    coverURL: doc.data().coverURL
                }
            )
        ));
        console.log(dataDB)
        alert("GALLERY UPDATED!")
    };

    // == Read sorted by date
    const getDataDBsorted = async () => {
        const q = query(collectionRef, orderBy("fecha", "desc"))
        const qrySnap = await getDocs(q)
        if (!qrySnap.empty) {
            setDataDBSorted(qrySnap.docs.map(
                (doc) => (
                    {
                        id: doc.id,
                        titulo: doc.data().titulo,
                        desc: doc.data().desc,
                        fecha: doc.data().fecha,
                        coverURL: doc.data().coverURL
                    }
                )
            ))
            alert("sort succesful")
        } else {
            alert("sort empty")
        }
    }

    useEffect(() => {
        {
            getDataDB();
            getDataDBsorted();
        }
    }, []);



    return (
        <div>
            {
                dataDBSorted !== null && dataDBSorted.map((news, index) => (
                    index === 0
                        ? <Col className="NG-column">
                            <Row className="NG-head" lg>
                                <NewsCardsHead key={index}
                                    pDate={news.fecha.toDate().toDateString()}
                                    pTime={news.fecha.toDate().toLocaleTimeString()}
                                    pTitle={news.titulo}
                                    pBody={news.desc}
                                    pCoverURL={news.coverURL} />
                            </Row>
                        </Col>
                        : null
                ))
            }

            <Row className="NG-row" >
                {
                    dataDBSorted !== null && dataDBSorted.map((news, index) => (
                        index !== 0
                            ? <Col className="NG-column" xs={6} md={4}>
                                <NewsCards key={index}
                                    pDate={news.fecha.toDate().toDateString()}
                                    pTime={news.fecha.toDate().toLocaleTimeString()}
                                    pTitle={news.titulo}
                                    pBody={news.desc}
                                    pCoverURL={news.coverURL} />
                            </Col>

                            : null
                    ))
                }
            </Row >



        </div >


    )

}

export default NewsGallery;