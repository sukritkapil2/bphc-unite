import React from "react";
import "../Stylesheets/main2.css";
import axios from "axios";

const initialstate = {
  email: "",
  password: ""
};

class AdminOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialstate;
    this.onEventClick = this.onEventClick.bind(this);
    this.onFeedbackClick = this.onFeedbackClick.bind(this)
    this.onLogout = this.onLogout.bind(this);
  }

  

  onEventClick(e) {
    console.log("Sending Post Request");
    e.preventDefault();
    return(window.location.href = "/adminevents");
  }

  onFeedbackClick(e) {
    return (window.location.href = "/adminfeedback");
  }

  onLogout(e)
  {
    window.localStorage.removeItem("authToken");
    window.location.href = "/adminlogin";
  }

  render() {
    return (
      <div>
        <div className="options">
          <h1>Administrator Options</h1>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-large"
            id="button1"
            onClick={this.onEventClick}
          >
            Event Management
          </button>
          <button
<<<<<<< HEAD
            type="submit"
            className="btn btn-primary btn-block btn-large"
            id="button23"
=======
            type="goback"
            className="btn btn-primary"
            id="button1"
>>>>>>> cb6cc2f7da5fb7f898f6624c71f48f0d6fd9f9c5
            onClick={this.onFeedbackClick}
          >
            View Feedback
          </button>
          <button
            type="goback"
            className="btn btn-primary"
            id="buttonhome"
            onClick={this.onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default AdminOptions;
