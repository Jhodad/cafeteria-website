import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Image, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./CustomNavbar.css";
import title from "../../localAssets/Title.png";
import { db } from "../../config/firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";


function CustomNavbar(params) {

  const [collapsed, setCollapsed] = useState(false)
  const setToggle = () => {
    setCollapsed(!collapsed)
  }

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);

  // ==================
  // ==     CRUD     ==
  // ==================
  // == Data
  const [dataDB, setDataDB] = useState(null);
  const [collectionRef, setCollectionRef] = useState(collection(db, 'users'));

  // == Read
  const getDataDB = async () => {
    const collectionSnap = await getDocs(collectionRef);
    setDataDB(collectionSnap.docs.map(
      (doc) => (
        {
          id: doc.id,
          username: doc.data().username,
          password: doc.data().password
        })
    ));
  };

  // Handle Sign In Modal
  const [authModal, setAuthModal] = useState(false)
  const toggleAuthModal = () => {
    setAuthModal(!authModal)
  }

  const toggleIsVerified = () => {
    setVerified(current => !current)
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // HandleSignOut
  function HandleSignOut() {
    toggleAuthModal()
    toggleIsVerified()
    returnToParent()
    alert("SIGN OUT SUCCESSFUL")
  }

  // HandleSignIn
  const HandleSignIn = async () => {
    const q = query(collectionRef, where("username", "==", user), where("password", "==", password))
    const qrySnap = await getDocs(q)
    if (!qrySnap.empty) {
      qrySnap.forEach((doc) => {
        // console.log(doc.id)
        // console.log(doc.get("username"))
        // console.log(doc.get("password"))
        toggleIsVerified()
        returnToParent()
        toggleAuthModal()
        alert("SIGN IN SUCCESSFUL")
      })
    } else {
      alert("WRONG CRENDENTIALS")
    }
  }

  const returnToParent = () => {
    params.isUser(user);
    params.isLogged(verified);
  }

  useEffect(() => {
    {
      getDataDB();
      returnToParent()
      console.log('isLoading is: ', verified);
    }
  }, []);

  return (
    <div>

      <Navbar className="navBar fixed-top" expand="lg" onChange={setToggle} onToggle={setToggle}>

        {/*Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ml-auto justify-content-end"
        />

        <Navbar.Collapse fluid="true" className="centered-flex centered-text">

          {/* Path if Collapsed */}
          {collapsed &&
            < Nav fluid="true" className="centered-flex centered-text">
              <LinkContainer to="/">
                <Nav.Link className="image-holder-style home">
                  <Image src={title} className="brand-logo" />
                </Nav.Link>
              </LinkContainer>

              {/* SIGNED IN */}
              {
                !authModal &&
                <Container className="signIn-holder">
                  <Button className="signIn-btn" onClick={() => handleShow()}>SIGN IN</Button>
                </Container>
              }

              {/* NOT SIGNED IN */}
              {
                authModal &&
                <Container className="signIn-holder">
                  <h3 className="userDisplay">{user}</h3>
                  <Button className="signOut-btn" onClick={() => HandleSignOut()}>SIGN OUT</Button>
                </Container>
              }

              <LinkContainer to="/shop">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Productos</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Nosotros</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Contacto</p>
                </Nav.Link>
              </LinkContainer>

            </Nav>
          }

          {/* Path if NOT Collapsed (EXPANDED)*/}
          {!collapsed &&
            < Nav fluid="true" className="centered-flex centered-text">
              <LinkContainer to="/">
                <Nav.Link className="image-holder-style home">
                  <Image src={title} className="brand-logo" />
                </Nav.Link>
              </LinkContainer>

              {/* SIGNED IN */}
              {
                !authModal &&
                <Container className="signIn-holder">
                  <Button className="signIn-btn" onClick={() => handleShow()}>SIGN IN</Button>
                </Container>
              }

              {/* NOT SIGNED IN */}
              {
                authModal &&
                <Container className="signIn-holder">
                  <h3 className="userDisplay">{user}</h3>
                  <Button className="signOut-btn" onClick={() => HandleSignOut()}>SIGN OUT</Button>
                </Container>
              }

              <LinkContainer to="/shop">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Productos</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Nosotros</p>
                </Nav.Link>
              </LinkContainer>


              <LinkContainer to="/contact">
                <Nav.Link className="text-holder-style">
                  <p className="text-style">Contacto</p>
                </Nav.Link>
              </LinkContainer>

            </Nav>
          }

          {/* Barra de color en la Navbar */}
          <span fluid="true" className="rgb-Line" />

          {
            !authModal &&
            <Container fluid className="page-header">

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Sign In using your credentials</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <form>
                    <input
                      type='text'
                      value={user}
                      onChange={e => setUser(e.target.value)}
                    />
                    <p>USERNAME</p>


                    <input
                      type='password'
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                    />
                    <p>PASSWORD</p>
                  </form>
                </Modal.Body>

                <Modal.Footer>
                  <Button className="btn-modal" onClick={handleClose}>
                    Return
                  </Button>

                  <Button className="btn-modal" onClick={() => HandleSignIn()}>
                    Confirm
                  </Button>
                </Modal.Footer>

              </Modal>
            </Container>

          }

        </Navbar.Collapse>

      </Navbar>

    </div >
  );
}

export default CustomNavbar;