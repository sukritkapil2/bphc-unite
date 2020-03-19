import React from "react";
import "../Stylesheets/feedback.css";
import Axios from "axios";

class Feedback extends React.Component {
  goBack(e) {
    return (window.location.href = "/");
  }

  render() {
    return (
      <div>
        <div className="feedback">
          <div className="text">Feedback to Developers</div>
          <input
            type="text"
            name="n"
            placeholder="Name"
            required="required"
            id="name"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="e"
            placeholder="Email"
            required="required"
            id="email2"
            onChange={this.onChange}
          />
          <textarea name="paragraph_text" cols="50" rows="10" id="message">Your Feedback</textarea>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-large"
            id="button2"
            onClick={this.onSend}
          >
            Send Feedback
          </button>
          <button
            type="goback"
            className="btn btn-primary"
            id="buttonhome2"
            onClick={this.goBack}
          >
            Home
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;
