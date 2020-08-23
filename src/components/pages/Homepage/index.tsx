import React from "react";
import "./index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Homepage = () => {
  return (
    <div>
      <Container>
        <Col xs={12} md={12} lg={6}>
          <Row>
            <header className="header">Join Us In Celebrating Our Love</header>
          </Row>
          <div>
            <p id="borderhome" className="subheader">
              SATURDAY, THE 21ST OF AUGUST, 2021 <br /> AT 4PM IN THE EVENING
              <br /> AT HIDDEN GREENS GOLF COURSE
            </p>
          </div>
          <Link to="/rsvp">
            <Button bsPrefix="linkrsvp">RSVP!</Button>
          </Link>
        </Col>
      </Container>
      <Col xs={0} md={0} lg={6}></Col>
    </div>
  );
};

export default Homepage;
