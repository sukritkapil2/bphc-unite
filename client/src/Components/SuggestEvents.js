import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import VerticalNav from "./VerticalNav";
import HorizontalNav from "./HorizontalNav";
import { ToastsContainer, ToastsStore } from 'react-toasts';


class SuggestEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      location: '',
      address: ''
    };
    this.updateText = this.updateText.bind(this)
    this.submitEvent = this.submitEvent.bind(this)
  }

  updateText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitEvent(event) {
    //api call to add it to mongodb
    const evt = {
      name: this.state.location,
      addr: this.state.address,
      status : "1"
    }
    console.log(evt)
    axios.post('/api/events/suggest', evt)
      .then((res) => {
        console.log(res.data)
        ToastsStore.success("Submitted event for approval!")
      })
      .catch((err) => {
        console.log(err);
        ToastsStore.warning("Unsucessful submission. Try again later.")
      })
  }

  render() {

    return (
      <div>
        <div className="box">
          <VerticalNav />
        </div>
        <div className="columns">
          <div className="column is-one-fifth sideNav">
            <HorizontalNav />
          </div>
          <div className="normal-container">
            <div class="control">
              <input class="input" type="text" placeholder="Enter event here" onChange={this.updateText} name="location"></input>
            </div>
            <br />
            <div class="control">
              <textarea class="textarea has-fixed-size" placeholder="Fixed size textarea" onChange={this.updateAddress} name="address"></textarea>
            </div>
            <br />
            <button class="button is-link" onClick={this.submitEvent}>Submit</button>
          </div>
        </div>
        <ToastsContainer store={ToastsStore} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(SuggestEvents);
