import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import {Reservation} from "../../../types/Reservation";
import GuestForm from "../../subcomponents/GuestForm";
import {Guest} from "../../../types/Guest";
import Modal from "react-bootstrap/Modal";
import Redirect from "react-router-dom/Redirect";
import {postRsvp} from "../../../services/backendService";

const RSVP = () => {
    const [show, setShow] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [guests, setGuests] = React.useState<Guest[]>([
        {
            guestName: "",
            guestFoodChoice: "",
        },
    ]);
    const [reservation, setReservation] = React.useState<Reservation | null>(
        null
    );

    const addGuest = (e: Event | any) => {
        var newState: Guest[] = guests;
        newState.push({
            guestName: "",
            guestFoodChoice: "",
        });
        setGuests([...newState]);
    };

    const changeChildren = (e: Event | any) => {
        setReservation({...reservation, children: e.target.value});
    };

    const submitData = (e: any) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        guests.forEach((guest, index) => {
            if (guest.guestFoodChoice === "" || guest.guestFoodChoice === undefined) {
                let newState: Guest[] = guests;
                newState[index] = {
                    ...guest,
                    hasFoodChoice: false,
                };
                setGuests([...newState]);
                return;
            }
        })
        setReservation({...reservation, guests: guests});
        const payload = {
            name: guests[0].guestName,
            guest: {
                ...guests,
                ...reservation,
            },
        };
        postRsvp(payload)
            .then(() => {
                setGuests([
                    {
                        guestName: "",
                        guestFoodChoice: "",
                    },
                ]);
                handleShow();
                setTimeout(function () {
                    setSubmitted(true);
                }, 3000);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Col xs={12} sm={12} md={12} lg={6}>
                <Row>
                    <Card className="card">
                        <header className="headertitle">RSVP</header>
                        <Form onSubmit={submitData}>
                            {guests.map((guest, index) => {
                                return (
                                    <div style={{margin: 10}}>
                                        <GuestForm
                                            index={index}
                                            guests={guests}
                                            guest={guests[index]}
                                            setGuest={setGuests}
                                        />
                                    </div>
                                );
                            })}
                            <Row>
                                <Col>
                                    <Form.Label style={{fontWeight: 'bold'}} className="children">
                                        Add People In Your Party (Plus 1s And Children Aged 12+)
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <Button
                                        size="sm"
                                        id="addperson"
                                        onClick={addGuest}
                                        variant="outline-primary"
                                    >
                                        +
                                    </Button>{" "}
                                </Col>
                            </Row>
                            <Form.Group className="children" controlId="Children">
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            {" "}
                                            Number of Young Children You're Bringing?
                                        </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            max="5"
                                            min="0"
                                            type="number"
                                            value={reservation?.children}
                                            onChange={changeChildren}
                                        />
                                        <Form.Text className="text-muted">
                                            Young Children Will Receive Chicken Fingers As Their
                                            Dinner.
                                        </Form.Text>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button
                                id="button-group"
                                variant="outline-primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Row>
            </Col>
            <Col xs={0} sm={0} md={0} lg={6}></Col>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>RSVP Sent!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {submitted && <Redirect to="/info"/>}
        </div>
    );
};

export default RSVP;
