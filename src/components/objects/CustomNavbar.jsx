import React, { useState } from "react";
import { Image, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./CustomNavbar.css";
import title from "../../localAssets/Title.png";


function CustomNavbar() {
  const [collapsed, setCollapsed] = useState(false)
  const setToggle = () => {
    setCollapsed(!collapsed)
  }

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
          <span fluid="true" className="rgb-Line"></span>
        </Navbar.Collapse>

      </Navbar>

    </div >
  );
}

export default CustomNavbar;