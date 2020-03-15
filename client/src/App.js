import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import CabPage from "./Components/CabPage";
import SearchCabs from "./Components/SearchCabs";
import { connect } from "react-redux";
import { fetchUserAction } from "./actions/myaction";
import MyRequests from "./Components/MyRequests";

function App(props) {
  useEffect(() => {
    props.fetch_user();
  }, []);
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/cabs" component={CabPage}></Route>
          <Route path="/myrequests" component={MyRequests}></Route>
          <Route path="/searchcabs" component={SearchCabs}></Route>
    </Router>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    fetch_user: () => {
      dispatch(fetchUserAction());
    }
  };
};
export default connect(null, mapDispatchToProps)(App);
