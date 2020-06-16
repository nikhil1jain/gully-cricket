import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import MatchDashboard from "./containers/MatchDashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/matchDashboard" component={MatchDashboard} />
      </Switch>
    </div>
  );
}

export default App;
