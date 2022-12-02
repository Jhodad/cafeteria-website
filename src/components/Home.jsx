import React, { useState, useEffect } from "react";
import { Button, DropdownButton, Dropdown, Container, Image, Carousel } from "react-bootstrap";
import { db } from "../config/firebase.js";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import "./Home.css";
import welcomeVid from "../localAssets/coffeeVid.mp4";

// Funcion "constructor" con export default
export default function Home(params) {

  //Variables, P = Placeholder
  const [newName, setNewName] = useState('');
  const [newNamePH, setNewNamePH] = useState('');

  const [newPrice, setNewPrice] = useState('');
  const [newPricePH, setNewPricePH] = useState('');

  const [newDesc, setNewDesc] = useState('');
  const [newDescPH, setNewDescPH] = useState('');

  const [newURL, setNewURL] = useState('');
  const [newURLPH, setNewURLPH] = useState('');

  // El objeto seleccionado del DropDown
  const [selectedObject, setSelectedObject] = useState({});

  // ===============
  // DATA
  // ===============

  // Objeto que guarda los datos obtenidos de la DB firestore
  const [dataDB, setDataDB] = useState(null);
  // Select de una tabla "collection"
  const [collectionRef, setCollectionRef] = useState(collection(db, 'productos'));
  // Esta login?
  const [isVerified, setIsVerified] = useState(false)


  // ===============
  // CRUD
  // ===============

  // === CREATE ===
  const createProduct = async () => {
    // Add a Doc 
    // addDoc(tabla, objeto)
    await addDoc(collectionRef, {
      nombre: newName,
      desc: newDesc,
      precio: Number(newPrice),
      imagen: newURL
    });
    alert("PRODUCT CREATED!")
  };

  // === READ ===
  const getDataDB = async () => {
    // getDocs = get filas o items (tabla)
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
    alert("GALLERY UPDATED!")
  };

  // === UPDATE ===
  const updateProduct = async () => {
    // Un producto 
    const prod = doc(db, 'productos', selectedObject)
    const newFields = {
      nombre: newName,
      desc: newDesc,
      precio: Number(newPrice),
      imagen: newURL
    }
    await updateDoc(prod, newFields)
    alert("PRODUCT UPDATED!")
  };

  // === SELECT ===
  const selectItem = async (aName) => {
    if (aName === undefined) {
      // si esta vacia, no busca nada
    } else {
      // si si tiene valor, hace el query
      //query(baseDatos, instruccion)
      const q = query(collectionRef, where("nombre", "==", aName))
      //nuevo snapshot de lo que obtuvo del query
      const qrySnap = await getDocs(q)
      qrySnap.forEach((doc) => {
        updateBoxes(doc);
      });
      console.log(selectedObject)
    }
  }

  const updateBoxes = async (doc) => {
    if (doc !== undefined) {
      setSelectedObject(doc.id)
      setNewNamePH(doc.get("nombre"));
      setNewPricePH(doc.get("precio"));
      setNewDescPH(doc.get("desc"))
      setNewURLPH(doc.get("imagen"))
    }
  }

  // === DELETE ===
  const deleteProduct = async () => {
    const prod = doc(db, 'productos', selectedObject)
    await deleteDoc(prod)
    alert("PRODUCT DELETED!")
  };

  // al inicio de la pagina
  useEffect(() => {
    {
      getDataDB();
    }
  }, []);


  // ===============
  // CRUD
  // ===============
  return (
    <div>

      {/* ======================== */}
      {/*   WELCOME HEADER + VID   */}
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
      </Container>

      <Container className="body-splitter-xs" />


      {/* ======================== */}
      {/*     ADMIN SECTION        */}
      {/* ======================== */}
      { // JS para manejar los parametros
        // If params.verified 
        params.verified &&
        <Container fluid="true" className="shopDB-page-module shopDB-input-holder">

          {/* NAME */}
          <Container className="shopDB-textHolder">
            <h1 className="shopDB-title">Name: </h1>
            <input
              name="inputName"
              className="shopDB-input"
              placeholder="name"
              defaultValue={newNamePH}

              onChange={(event) => {
                setNewName(event.target.value)
              }}
            />
          </Container>

          {/* PRICE */}
          <Container className="shopDB-textHolder">
            <h1 className="shopDB-title">Price: </h1>
            <input
              name="inputPrice"
              className="shopDB-input"
              type="number"
              placeholder="price"
              defaultValue={newPricePH}
              onChange={(event) => {
                setNewPrice(event.target.value);
              }}
            />
          </Container>

          {/* DESC */}
          <Container className="shopDB-textHolder">
            <h1 className="shopDB-title">Description: </h1>
            <input
              name="inputName"
              className="shopDB-input-l"
              placeholder="short"
              defaultValue={newDescPH}
              onChange={(event) => {
                setNewDesc(event.target.value);
              }}
            />
          </Container>

          {/* URL */}
          <Container className="shopDB-TextHolder">
            <Container className="shopDB-subTextHolder">
              <h1 className="shopDB-title">Image URL: </h1>


              <Container className="shopDB-subInputHolder">
                <Image className="shopDB-selectPreview" src={newURL} />
                <input
                  className="shopDB-input-m"
                  placeholder="url"
                  defaultValue={newURLPH}
                  onChange={(event) => {
                    setNewURL(event.target.value);
                  }}
                />
              </Container>
            </Container>
          </Container>

          <Container className="shopDB-textHolder">
            <Button className="shopDB-button" onClick={() => createProduct()}> CREATE </Button>
            <Button className="shopDB-button" onClick={() => getDataDB()}> READ </Button>
            <Button className="shopDB-button" onClick={() => updateProduct()}> UPDATE </Button>
            <Button className="shopDB-button" onClick={() => deleteProduct()}> DELETE </Button>
          </Container>

          <Container className="shopDB-table">
            <DropdownButton
              defaultValue={"Select a Product"}
              title={"Selected : " + newNamePH + ", id: " + selectedObject}
              variant="primary"
              menuVariant="dark"
              className="shopDB-dd"
            >

              {
                // If dataDB no esta vacia
                dataDB !== null &&
                dataDB.map((products) => (
                  <Dropdown.Item className="objCards-dropdown" fluid="true" onClick={() => selectItem(products.nombre)}>
                    {products.nombre}
                  </Dropdown.Item>
                ))
              }
            </DropdownButton>
            <Image className="shopDB-selectPreview2" src={newURLPH} />
          </Container>

        </Container>
      }


      {/* ======================== */}
      {/*     FEATURED PRODUCTS    */}
      {/* ======================== */}
      <Carousel className="carousel" interval={2000} indicators={false} >
        {
          dataDB !== null && dataDB.slice(0, 3).map((products, index) => (
            <Carousel.Item index>
              <Image className="carousel-img" src={products.imagen} />
              <Carousel.Caption className="caption">
                <h1>{products.nombre}</h1>
                <h3>{products.desc}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }

      </Carousel>

      <Container className="body-splitter-xs"/>

    </div>
  );
}

