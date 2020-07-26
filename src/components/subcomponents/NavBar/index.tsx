import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./index.css";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand bsPrefix="navbar">Ethan + Jackie's Wedding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="home" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="rsvp" to="/rsvp">RSVP</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="gallery" to="/gallery">Gallery</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="details" to="/details">Details</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
