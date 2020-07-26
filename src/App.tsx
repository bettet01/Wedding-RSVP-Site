import React from "react";
import "./App.css";
import RSVP from "./components/pages/RSVP";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/subcomponents/NavBar/index";
import Homepage from "./components/pages/Homepage";
import Gallery from "./components/pages/Gallery";
import Details from "./components/pages/Details";
import Admin from "./components/pages/Admin";

function App() {
  return (
    <div className="background-image">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/rsvp">
            <RSVP></RSVP>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
