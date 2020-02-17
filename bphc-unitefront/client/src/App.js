import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import CabPage from "./Components/CabPage";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/cabs" component={CabPage}></Route>
      </Router>
    );
  }
}

export default App;
