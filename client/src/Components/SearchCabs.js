import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import { set } from "mongoose";
import VerticalNav from "./VerticalNav";
import HorizontalNav from './HorizontalNav';
import CabCard from "./CabCard";
import Calendar from "./Calendar";
import moment from 'moment';
class SearchCabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: [],
      date: Date.now,
      fromValue:'Secunderabad',
      toValue:''
    }
    this.fromSelect = this.fromSelect.bind(this)
    this.toSelect = this.toSelect.bind(this)
    this.filterResult = this.filterResult.bind(this)
  }

  fromSelect(event) {
    this.setState({ fromValue: event.target.value })
    console.log(this.state)
  }
  toSelect(event) {
    this.setState({ toValue: event.target.value })
    console.log(this.state)
  }
  filterResult() {
    axios.get("/api/filterrequests",request)
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({ requests: data })
      })
      .catch((err) => console.log(err));
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
            <div class="control">
              <button class="button is-link" onClick={this.filterResult}>Submit</button>
            </div>
              {
                this.state.requests.map((item, index) => {
                  return <CabCard key={index} requesterName={item.name} dateofrequest={item.date} message={item.msg} from={this.state.from} to={this.state.to}></CabCard>
                })
              }
          </div>
        </div>
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

export default connect(mapStateToProps)(SearchCabs);