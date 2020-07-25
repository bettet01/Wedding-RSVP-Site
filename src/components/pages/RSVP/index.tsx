import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import axios from "axios";

type Guest = {
  guestName?: string;
  plusOneName?: string;
  children?: number;
  guestFoodChoice?: string;
  plusOneFoodChoice?: string;
  bedsNeeded?: number;
};

type BooleanChecker = {
  plusOneChecked: boolean;
  hotelChecked: boolean;
};

const RSVP = () => {
  const [booleanChecker, setBooleanChecker] = React.useState<BooleanChecker>({
    plusOneChecked: false,
    hotelChecked: false,
  });

  const [guest, setGuest] = React.useState<Guest | null>(null);

  const changeGuestName = (e: Event | any) => {
    setGuest({ ...guest, guestName: e.target.value });
  };

  const changePlusOneName = (e: Event | any) => {
    setGuest({ ...guest, plusOneName: e.target.value });
  };

  const changeChildren = (e: Event | any) => {
    setGuest({ ...guest, children: e.target.value });
  };

  const changeGuestFoodChoice = (e: Event | any) => {
    setGuest({ ...guest, guestFoodChoice: e.target.value });
  };

  const changePlusOneFoodChoice = (e: Event | any) => {
    setGuest({ ...guest, plusOneFoodChoice: e.target.value });
  };

  const changeBedsNeeded = (e: Event | any) => {
    setGuest({ ...guest, bedsNeeded: e.target.value });
  };

  const changeHotelCheckbox = (e: Event | any) => {
    setBooleanChecker({ ...booleanChecker, hotelChecked: e.target.checked });
  };

  const changePlusOneChecked = (e: Event | any) => {
    setBooleanChecker({ ...booleanChecker, plusOneChecked: e.target.checked });
  };

  const submitData = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/weddingguestrsvp", guest, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("Made it here!");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Col md={6}>
        <Row>
          <Card className="card">
            <header className="headertitle">RSVP</header>
            <Form onSubmit={submitData}>
              <Form.Group className="name" controlId="Name">
                <Form.Label>
                  Your Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={guest?.guestName}
                  onChange={changeGuestName}
                />
              </Form.Group>

              <div>
                <div className="dinner">Dinner Selection?</div>
                <Form.Check
                  name="dinner"
                  className="filetmignon"
                  inline
                  label="Filet Mignon"
                  type={"radio"}
                  id={`inline-${"radio"}-1`}
                  value="Filet Mignon"
                  onClick={changeGuestFoodChoice}
                />
                <Form.Check
                  name="dinner"
                  className="tuxedochicken"
                  inline
                  label="Tuxedo Chicken"
                  type={"radio"}
                  id={`inline-${"radio"}-2`}
                  value="Tuxedo Chicken"
                  onClick={changeGuestFoodChoice}
                />
                <Form.Check
                  name="dinner"
                  className="veggie"
                  inline
                  label="Veggie Stack"
                  type={"radio"}
                  id={`inline-${"radio"}-3`}
                />
              </div>
              
              <Form.Label className="name">Add People In Your Party (Plus 1s And Children Aged 12+)</Form.Label>
              <Button size="sm" id="addperson" variant="outline-primary">+</Button>{' '}

              <Form.Group className="children" controlId="Children">
                <Form.Label> Bringing Young Children?</Form.Label>
                <Form.Control
                  max="5"
                  min="0"
                  type="number"
                  placeholder="Number of Young Children (Aged 0-11) You're Bringing?"
                  value={guest?.children}
                  onChange={changeChildren}
                />
                <Form.Text className="text-muted">
                  Children Will Receive Chicken Fingers As Their Dinner.
                </Form.Text>
              </Form.Group>

              <Form.Group className="hotel" controlId="HotelCheckBox">
                <Form.Check
                  type="checkbox"
                  label="Should We Reserve A Hotel Room(s) For You?"
                  onChange={changeHotelCheckbox}
                />
              </Form.Group>

              {booleanChecker.hotelChecked && (
                <Form.Group className="hotelbeds" controlId="Beds">
                  <Form.Label></Form.Label>
                  <Form.Control
                    max="4"
                    min="0"
                    type="number"
                    placeholder="Number of Beds?"
                    value={guest?.bedsNeeded}
                    onChange={changeBedsNeeded}
                  />
                </Form.Group>
              )}
              <Button
                id="button-group"
                variant="outline-primary"
                type="submit"
                onClick={submitData}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Row>
      </Col>
      <Col></Col>
    </div>
  );
};

export default RSVP;
