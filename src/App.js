import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
