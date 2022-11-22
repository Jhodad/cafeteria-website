import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import About from "./components/About"
import Navbar from "./components/objects/CustomNavbar.jsx";


function App() {



  return (
    <Container fluid="true" className="frame" >
      <Router>
        <Navbar />
        
        <Container fluid="true" className="frame">
          <Routes>
            <Route exact path="/" element={<Home />} />
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
