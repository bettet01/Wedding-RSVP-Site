import React from "react";
import Form from 'react-bootstrap/Form';


const GuestForm = (props: any) => {
    return (
        <div>
            <Form.Group className="name" controlId="Name">
                <Form.Label>
                    Your Name
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={props.guest?.guestName}
                    onChange={props.changeGuestName}
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
                    onClick={props.changeGuestFoodChoice}
                />
                <Form.Check
                    name="dinner"
                    className="tuxedochicken"
                    inline
                    label="Tuxedo Chicken"
                    type={"radio"}
                    id={`inline-${"radio"}-2`}
                    value="Tuxedo Chicken"
                    onClick={props.changeGuestFoodChoice}
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
        </div>
    )
}

export default GuestForm;