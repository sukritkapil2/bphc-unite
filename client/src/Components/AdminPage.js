import React from "react";
import "../Stylesheets/main3.css";
import Axios from "axios";
import FeedCard from "./FeedCard";

const initialState = {
  feedback: []
};

class AdminPage extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onClick(event) {
    window.localStorage.removeItem("authToken");
    window.location.href = "/adminlogin";
  }

  render() {
    Axios.get("/getfeedback")
      .then(res => {
        console.log("Feedbacks" + res.data);
        const feeds = res.data;
        this.setState({ feedback: feeds });
      })
      .catch(err => {
        console.log("Error in fetching feedback" + err);
      });

    const feedarr = this.state.feedback;
    const feedcards = feedarr.map((item, index) => {
      return (
        <FeedCard
          key={index}
          name={item.name}
          email={item.email}
          message={item.message}
        ></FeedCard>
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
          <div class="container">
            {feedcards}
            </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
