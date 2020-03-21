import React from "react";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import axios from "axios";
import "../Stylesheets/cabform.css";
import "../Stylesheets/main4.css";

class CabForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitRequest = this.submitRequest.bind(this);
    this.updateText = this.updateText.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {
      value: "",
      date: Date.now,
      fromValue: "check",
      toValue: "check"
    };
    this.fromSelect = this.fromSelect.bind(this);
    this.toSelect = this.toSelect.bind(this);
  }
  updateText(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }
  submitRequest(event) {
    console.log(this.props.user);
    event.preventDefault();
    console.log(this.state.value);
    const newRequest = {
      name: this.props.user.name,
      msg: this.state.value,
      date: this.state.date,
      emailID: this.props.user.email,
      from: this.state.fromValue,
      to: this.state.toValue
    };
    console.log(newRequest);
    axios
      .post("/api/cabs/request", newRequest)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
        console.log("CabForm");
      });
  }
  setDate(childData) {
    this.setState({ date: childData });
    console.log(this.state.date);
  }
  fromSelect(event) {
    this.setState({ fromValue: event.target.value });
    console.log(this.state);
  }
  toSelect(event) {
    this.setState({ toValue: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <div className="column is-half" id="cont2">
        <p className="text">Add a Cab Request</p>

        <div class="field" id="f1">
          <br></br>
          <label class="label">Departure Time</label>
          {/* <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div> */}
          <Calendar setDate={this.setDate} />
        </div>
        <label class="label" id="l1">From</label>
        <div class="control">
          <div class="select">
            <select
              class="is-focused"
              onChange={this.fromSelect}
              defaultValue={this.state.fromValue}
            >
              <option>Airport</option>
              <option>Secundarabad</option>
              <option>Railway Station</option>
              <option>Event</option>
              <option>Campus</option>
            </select>
          </div>
          <label class="label" id="l2">To</label>
          <div class="control"id="c2">
            <div class="select">
              <select
                class="is-focused"
                onChange={this.toSelect}
                defaultValue={this.state.toValue}
              >
                <option>Airport</option>
                <option>Secundarabad</option>
                <option>Railway Station</option>
                <option>Event</option>
                <option>Campus</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label class="label" id="l3">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Textarea"
                onChange={this.updateText}
                value={this.state.value}
                id="te1"
              ></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" id="buto1" onClick={this.submitRequest}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(CabForm);
