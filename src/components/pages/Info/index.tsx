import "./index.css";
import React, { useEffect, useState } from "react";
import ReactMomentCountDown from "react-moment-countdown";
import moment from "moment";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <header className="detail">Wedding Details</header>
            <p className="detailed">
              Event Date: August 21st, 2021
              <br />
              Ceremony Start Time: 4:00 PM
              <br />
              Location: Hidden Greens Golf Course
              <br />
              12977 200th St E
              <br />
              Hastings, MN 55033
              <br />
              Reception At Ceremony Venue
              <br />
              Formal Attire
            </p>
          </Col>
          <Col lg={4}>
            <header className="wedding-countdown">The "I Do" Countdown</header>
            <ReactMomentCountDown
              className="countdown"
              style={{ color: "white" }}
              toDate={moment("Sat 21 Aug 2021 16:00:00")}
              targetFormatMask="MM:DD:HH:mm:ss"
            />
            <header></header>
            <Link to="/">
              <Button bsPrefix="linkregistry">Access Registry Here!</Button>
            </Link>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
