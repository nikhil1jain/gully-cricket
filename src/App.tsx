import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import {
  ConnectedLandingPage,
  ConnectedMatchDashboard,
  ConnectedMatchResult,
} from "./containers/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/matchDashboard" component={ConnectedMatchDashboard} />
        <Route path="/" exact component={ConnectedLandingPage} />
        <Route path="/matchResult" component={ConnectedMatchResult} />
      </Switch>
    </div>
  );
}

export default App;
