import React from "react";
import "./index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Col md={6}>
        <Row>
          <header className="header">Join Us In Celebrating Our Love</header>
        </Row>
        <div>
          <Row className="subheader">SATURDAY, THE 21ST OF AUGUST, 2021</Row>
          <Row className="subheader">AT 4 PM IN THE EVENING</Row>
          <Row className="subheader">AT HIDDEN GREENS GOLF COURSE</Row>
        </div>
          <Link to="/rsvp">
            <Button bsPrefix="linkrsvp">RSVP!</Button>
          </Link>
      </Col>
      <Col md={6}></Col>
    </div>
  );
};

export default Homepage;
