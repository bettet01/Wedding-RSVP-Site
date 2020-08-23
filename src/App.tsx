import React from "react";
import "./App.css";
import RSVP from "./components/pages/RSVP";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/subcomponents/NavBar/index";
import Homepage from "./components/pages/Homepage";
import Gallery from "./components/pages/Gallery";
import Info from "./components/pages/Info";
import Admin from "./components/pages/Admin";

function App() {
  return (
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
          <Route path="/info">
            <Info></Info>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
