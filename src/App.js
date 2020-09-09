import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";
import Inscription from "./pages/Inscription";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/offer/:id" component={Offer} />
          <Route path="/inscription" component={Inscription} />

          <Route path="/login" component={Login} />

          <Route path="/" component={Offers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
