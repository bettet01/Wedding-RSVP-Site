import React from "react";
import "./App.css";
import RSVP from "./components/pages/RSVP";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Homepage from "./components/pages/Homepage";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
