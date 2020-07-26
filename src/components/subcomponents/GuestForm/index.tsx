import React, {ChangeEvent} from "react";
import Form from 'react-bootstrap/Form';
import {Guest} from "../../../types/Guest";


const GuestForm = (props: any) => {

    const changeGuestName = (e: Event | any) => {
        var newState:Guest[] = props.guests;
        if(e.target.value != null){
            newState[props.index] = {
                ...props.guest,
                guestName: e.target.value
            }
        }
        props.setGuest([...newState]);
    }

    const changeGuestFoodChoice = (e: Event | any) => {
        var newState:Guest[] = props.guests;
        if(e.target.value != null){
            newState[props.index] = {
                ...props.guest,
                guestFoodChoice: e.target.value
            }
        }
        props.setGuest([...newState]);
        console.log(newState);
    }


    return (
        <div>
            <Form.Group className="name" controlId="Name">
                <Form.Label>
                    Your Name
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={props.guest.guestName}
                    onChange={changeGuestName}
                />
            </Form.Group>

            <div>
                <Form>
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
                </Form>
            </div>
        </div>
    )
}

export default GuestForm;