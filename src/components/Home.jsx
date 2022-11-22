import React, { useState, useEffect } from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { db } from "../config/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./Home.css";
import welcomeVid from "../localAssets/coffeeVid.mp4";


function Home() {

  // == Data
  const [dataDB, setDataDB] = useState(null);
  const [collectionRef, setCollectionRef] = useState(collection(db, 'menu'));

  // == Read
  const getDataDB = async () => {
    const collectionSnap = await getDocs(collectionRef);
    setDataDB(collectionSnap.docs.map(
      (doc) => (
        {
          id: doc.id,
          nombre: doc.data().nombre,
          desc: doc.data().desc,
          precio: doc.data().precio,
          imagen: doc.data().imagen
        })
    ));
    // alert("GALLERY UPDATED!")
  };

  useEffect(() => {
    {
      getDataDB();
    }
  }, []);

  return (
    <div>

      {/* ======================== */}
      {/*     WELCOME VID          */}
      {/* ======================== */}

      <Container fluid="true" className="page-header">
        <Container className="home-page-header" fluid="true" onContextMenu={e => e.preventDefault()}>
          <video className='home-page-header-vid' fluid="true" autoPlay loop muted>
            <source src={welcomeVid} type='video/mp4' />
          </video>
          <Container className="home-page-header-vid-text" fluid="true">
            <h1>CONOCE NUESTROS PRODUCTOS</h1>
          </Container>
        </Container>

        {
          /* <Image
            className="page-header-img"
            src={magusCard}
            alt="HEADER"
          /> */
        }

      </Container>


      {/* ======================== */}
      {/*     WELCOME TEXT         */}
      {/* ======================== */}

      <Container className="body-splitter-xs">  </Container>


      {/* ======================== */}
      {/*     FEATURED PRODUCTS         */}
      {/* ======================== */}

      <Carousel className="carousel" interval={2000} indicators={false} >


        {
          dataDB !== null && dataDB.map((products, index) => (
            <Carousel.Item>
              <Image className="carousel-img" src={products.imagen} />
              <Carousel.Caption>
                <h1>{products.nombre}</h1>
                <h3>{products.desc}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }

      </Carousel>

      <Container className="body-splitter-xs">  </Container>

    </div>
  );
}

export default Home;
