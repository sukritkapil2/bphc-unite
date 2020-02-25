
import React from "react";
import Calendar from "./Calendar"
import { connect } from 'react-redux'
import axios from 'axios'
import "../Stylesheets/cabform.css";

class SearchRequest extends React.Component {
    constructor(props) {
        super(props);
        this.submitRequest = this.submitRequest.bind(this);
        this.state = {fromValue: '', toValue: '' };
        this.fromSelect = this.fromSelect.bind(this)
        this.toSelect = this.toSelect.bind(this)

    }
    
    submitRequest(event) {
        

    }
   
    fromSelect(event) {
        this.setState({ fromValue: event.target.value })
        console.log(this.state)
    }
    toSelect(event) {
        this.setState({ toValue: event.target.value })
        console.log(this.state)
    }
    render() {
        return (
            <div className="column is-half">
                <b>Search</b>


                <div class="field">
                    {/* <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div> */}
            
                </div>
                <label class="label">From</label>
                <div class="control">
                    <div class="select">
                        <select class="is-focused" onChange={this.fromSelect} defaultValue={this.state.fromValue}>
                            <option>Airport</option>
                            <option>Secundarabad</option>
                            <option>Railway Station</option>
                            <option>Event</option>
                            <option>Campus</option>
                        </select>
                    </div>
                    <label class="label">To</label>
                    <div class="control">
                        <div class="select">
                            <select class="is-focused" onChange={this.toSelect} defaultValue={this.state.toValue}>
                                <option>Airport</option>
                                <option>Secundarabad</option>
                                <option>Railway Station</option>
                                <option>Event</option>
                                <option>Campus</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <button class="button is-primary" onClick={this.submitRequest}>Search</button>

                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(SearchRequest);