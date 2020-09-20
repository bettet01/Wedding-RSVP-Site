import React, { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";
import { Guest } from "../../../types/Guest";
import Card from "react-bootstrap/Card";
import "./index.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const GuestForm = (props: any) => {
  const changeGuestName = (e: Event | any) => {
    var newState: Guest[] = props.guests;
    if (e.target.value != null) {
      newState[props.index] = {
        ...props.guest,
        guestName: e.target.value,
      };
    }
    props.setGuest([...newState]);
  };

  const changeGuestFoodChoice = (e: Event | any) => {
    var newState: Guest[] = props.guests;
    if (e.target.value != null) {
      newState[props.index] = {
        ...props.guest,
        guestFoodChoice: e.target.value,
      };
    }
    props.setGuest([...newState]);
    console.log(newState);
  };

  const removeGuest = () => {
    var newState: Guest[] = props.guests;
    const index = newState.indexOf(props.guest);
    newState.splice(index, 1);
    props.setGuest([...newState]);
  };

  return (
    <div>
      <Card className="smallcard">
        <Form>
          <div className="rowchange">
            <Row>
              <Col lg={11}></Col>
              <Col lg={1}>
                <Button
                  size="sm"
                  onClick={removeGuest}
                  variant="light"
                  id="cancel"
                >
                  x
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="name" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={props.guest.guestName}
                    onChange={changeGuestName}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
                <div className="dinner">Dinner Selection?</div>
              </Col>
              <Col>
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
              </Col>
            </Row>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default GuestForm;
