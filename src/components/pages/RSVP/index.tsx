import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";

const RSVP = () => {
  return (
    <div>
      <Col md={6}>
          <Row>
        <Card className="card">
            <header className="headertitle">RSVP</header>
            <Form>
            <Form.Group className="name" controlId="Name">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="plusone" controlId="PlusOneCheckBox">
              <Form.Check type="checkbox" label="Plus One?" />
            </Form.Group>
            
            <Form.Group className="plusonename" controlId="PlusOneName">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Plus One's Name?" />
            </Form.Group>

            <Form.Group className="children" controlId="Children">
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                placeholder="Number of Children You're Bringing?"
              />
              <Form.Text className="text-muted">
                Children Will Receive Chicken Fingers As Their Dinner.
              </Form.Text>
            </Form.Group>

            <div>
              <div className="dinner">Your Dinner Choice?</div>
              <Form.Check className="filetmignon"
                inline
                label="Filet Mignon"
                type={"radio"}
                id={`inline-${"radio"}-1`}
              />
              <Form.Check className="tuxedochicken"
                inline
                label="Tuxedo Chicken"
                type={"radio"}
                id={`inline-${"radio"}-2`}
              />
               <Form.Check className="vegetable"
                inline
                label="Veggie Stack"
                type={"radio"}
                id={`inline-${"radio"}-3`}
              />
            </div>

            <div>
              <div className="dinnertwo">Your Plus One's Dinner Choice?</div>
              <Form.Check className="filetmignon"
                inline
                label="Filet Mignon"
                type={"radio"}
                id={`inline-${"radio"}-1`}
              />
              <Form.Check className="tuxedochicken"
                inline
                label="Tuxedo Chicken"
                type={"radio"}
                id={`inline-${"radio"}-2`}
              />
              <Form.Check className="vegetable"
                inline
                label="Veggie Stack"
                type={"radio"}
                id={`inline-${"radio"}-3`}
              />
            </div>

            <Form.Group className="hotel" controlId="HotelCheckBox">
              <Form.Check
                type="checkbox"
                label="Should We Reserve A Hotel Room For You?"
              />
            </Form.Group>

            <Form.Group className="hotelbeds" controlId="Beds">
              <Form.Label></Form.Label>
              <Form.Control type="number" placeholder="Number of Beds?" />
            </Form.Group>
            
            <div className="text-center">
                <Button className="button" variant="outline-primary" type="submit">
                Submit
                </Button>
            </div>
          </Form>
        </Card>
        </Row>
      </Col>
      <Col></Col>
    </div>
  );
};

export default RSVP;
