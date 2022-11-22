import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import About from "./components/About"
import Navbar from "./components/objects/CustomNavbar.jsx";
import { useEffect } from "react";


function App() {

  const [loggedUser, setLoggedUser] = useState("");
  const [isLogged, setisLogged] = useState();

  return (
    <Container fluid="true" className="frame" >
      <Router>
        <Navbar isUser={setLoggedUser} isLogged={setisLogged} />

        <Container fluid="true" className="frame">
          <Routes>
            <Route exact path="/" element={<Home verified={isLogged} />} />
            {/* <Route exact path="/" element={<Home verified={isLogged} creds={loggedUser} />} /> */}
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
          </Routes>

        </Container>

      </Router>
    </Container>
  );
}

export default App;
