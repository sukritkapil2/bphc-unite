import React from "react";
import "../Stylesheets/main3.css";
import axios from "axios";
import EventApprovalCard from "./EventApprovalCard";

<<<<<<< HEAD
class AdminEvents extends React.Component {
  constructor() {
    super();
    this.state = { events: [] };
=======


class AdminEvents extends React.Component {
  constructor() {
    super();
    this.state = {events:[]};
>>>>>>> cb6cc2f7da5fb7f898f6624c71f48f0d6fd9f9c5
    this.onClick = this.onClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  onClick(event) {
    window.localStorage.removeItem("authToken");
    window.location.href = "/adminlogin";
  }

<<<<<<< HEAD
  goBack(event) {
=======
  goBack(event)
  {
>>>>>>> cb6cc2f7da5fb7f898f6624c71f48f0d6fd9f9c5
    window.location.href = "/admin";
  }

  render() {
    axios
      .get("/api/events/getall")
      .then(response => {
        const data = response.data;
<<<<<<< HEAD
        this.setState({ events: data });
=======
        this.setState({ events : data });
>>>>>>> cb6cc2f7da5fb7f898f6624c71f48f0d6fd9f9c5
      })
      .catch(err => {
        console.log(err);
      });
<<<<<<< HEAD
    const myevents = this.state.events.map((item, index) => {
      return (
        <EventApprovalCard
          key={index}
          eventName={item.eventName}
          status={item.status}
          eventAddr={item.eventAddr}
          action={this.forceUpdate}
        ></EventApprovalCard>
      );
    });
=======
      const myevents = this.state.events.map((item, index) => {
          return (
            <EventApprovalCard

              key={index}
              eventName={item.eventName}
              status = {item.status}
              eventAddr = {item.eventAddr}
              action = {this.forceUpdate}
            ></EventApprovalCard>
          );
      });
>>>>>>> cb6cc2f7da5fb7f898f6624c71f48f0d6fd9f9c5

    return (
      <div>
        <div className="AdminPage">
<<<<<<< HEAD
          <h1 id="header-text">EVENT MANAGEMENT</h1>
          <button
=======
        <h1 id = "header-text">EVENT MANAGEMENT</h1>
        <button
>>>>>>> cb6cc2f7da5fb7f898f6624c71f48f0d6fd9f9c5
            className="btn btn-primary btn-large buttonlogout"
            onClick={this.goBack}
          >
            Back
          </button>
          <button
            className="btn btn-primary btn-large buttonlogout"
            onClick={this.onClick}
          >
            LOGOUT
          </button>
<<<<<<< HEAD
          <div class="container2">{myevents}</div>
=======
          <div class="container2">
            {myevents}
            </div>
>>>>>>> cb6cc2f7da5fb7f898f6624c71f48f0d6fd9f9c5
        </div>
      </div>
    );
  }
}

export default AdminEvents;
