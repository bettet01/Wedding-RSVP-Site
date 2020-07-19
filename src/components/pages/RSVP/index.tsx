import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./index.css";  


type Guest = {
  guestName?: string,
  plusOneName?: string,
  children?: number,
  guestFoodChoice?: string,
  plusOneFoodChoice?: string,
  bedsNeeded?: number
} 

type BooleanChecker = {
  plusOneChecked: boolean, 
  hotelChecked: boolean,
}

const RSVP = () => {
const [booleanChecker, setBooleanChecker] = React.useState<BooleanChecker>({
  plusOneChecked: false,
  hotelChecked: false
})

const [guest, setGuest] = React.useState<Guest | null>(null);

const changeGuestName = (e: Event | any) => {
  setGuest({...guest, guestName: e.target.value})
}

const changePlusOneName = (e: Event | any) => {
  setGuest({...guest, plusOneName: e.target.value})
}

const changeChildren = (e: Event | any) => {
  setGuest({...guest, children: e.target.value})
}

const changeGuestFoodChoice = (e: Event | any) => {
  setGuest({...guest, guestFoodChoice: e.target.value})
} 

const changePlusOneFoodChoice = (e: Event | any) => {
  setGuest({...guest, plusOneFoodChoice: e.target.value})
}

const changeBedsNeeded = (e: Event | any) => {
  setGuest({...guest, bedsNeeded: e.target.value})
}

const changeHotelCheckbox = (e: Event | any) => {
  setBooleanChecker({...booleanChecker, hotelChecked: e.target.checked})
}

const changePlusOneChecked = (e: Event | any) => {
  setBooleanChecker({...booleanChecker, plusOneChecked: e.target.checked})
}

const submitData = (e:any) => {
  e.preventDefault();
  axios.post("http://localhost:8080/weddingguestrsvp", guest, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => {
    console.log("Made it here!")
  })
  .catch((err) => { 
    console.log(err)
  })
}


  return (
    <div>
      <Col md={6}>
        <Card>
          <header className="headertitle">RSVP</header>
          <Form onSubmit={submitData}>
            <Form.Group className="name" controlId="Name">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Name" value={guest?.guestName} onChange={changeGuestName} />
            </Form.Group>

            <Form.Group className="plusone" controlId="PlusOneCheckBox">
              <Form.Check type="checkbox" label="Plus One?" onChange={changePlusOneChecked} />
            </Form.Group>
            { booleanChecker.plusOneChecked &&
            <Form.Group className="plusonename" controlId="PlusOneName">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Plus One's Name?" value={guest?.plusOneName} onChange={changePlusOneName} />
            </Form.Group>
              }
            <Form.Group className="number" controlId="Children">
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                placeholder="Number of Children You're Bringing?"
                value={guest?.children} onChange={changeChildren}
              />
              <Form.Text className="text-muted">
                Children Will Receive Chicken Fingers As Their Dinner.
              </Form.Text>
            </Form.Group>

            <div className="dinner">
              <div>Your Dinner Choice?</div>
              <Form.Check
                inline
                label="Filet Mignon"
                type={"radio"}
                id={`inline-${"radio"}-1`}
                value="Filet Mignon"
                onClick={changeGuestFoodChoice}
              />
              <Form.Check
                inline
                label="Tuxedo Chicken"
                type={"radio"}
                id={`inline-${"radio"}-2`}
                value="Tuxedo Chicken"
                onClick={changeGuestFoodChoice}
              />
            </div>
            { booleanChecker.plusOneChecked &&
            <div>
              <div className="dinner">Your Plus One's Dinner Choice?</div>
              <Form.Check className="dinner"
                inline
                label="Filet Mignon"
                type={"radio"}
                id={`inline-${"radio"}-1`}
              />
              <Form.Check className="dinner"
                inline
                label="Tuxedo Chicken"
                type={"radio"}
                id={`inline-${"radio"}-2`}
              />
            </div>
                  }
            <Form.Group className="hotel" controlId="HotelCheckBox">
              <Form.Check
                type="checkbox"
                label="Should We Reserve A Hotel Room For You?"
                onChange={changeHotelCheckbox}
              />
            </Form.Group>
            
            { booleanChecker.hotelChecked &&
            <Form.Group controlId="Children">
              <Form.Label></Form.Label>
              <Form.Control type="number" placeholder="Number of Beds?" value={guest?.bedsNeeded} onChange={changeBedsNeeded}/>
            </Form.Group>
            }
            <Button variant="primary" type="submit" onClick={submitData}>
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
      <Col></Col>
    </div>
  );
};

export default RSVP;
