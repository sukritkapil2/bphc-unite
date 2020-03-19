import React from "react";
import "../Stylesheets/main3.css";
import EventApprovalCard from "./EventApprovalCard"
import axios from "axios";
class AdminPage extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      events : []
    }
    this.onClick = this.onClick.bind(this);
    
  }
  onClick(event) {
    window.localStorage.removeItem("authToken");
    window.location.href = "/adminlogin";
  }

  render() {
    axios
      .get("/api/events/getall")
      .then(response => {
        const data = response.data;
        this.setState({ events : data });
      })
      .catch(err => {
        console.log(err);
      });
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
    return (
      <div>
        <div className="AdminPage">
          <button
            className="btn btn-primary btn-large buttonlogout"
            onClick={this.onClick}
          >
            LOGOUT
          </button>
          <div class="card">
            <center><b><h3>Events and Locations</h3></b></center>
            <hr></hr>
            {myevents}
          </div>
          <div class="card">
            <p class="text">EVENT SUBMISSIONS</p>
            <br/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
