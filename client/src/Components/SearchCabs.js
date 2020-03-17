
import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import { set } from "mongoose";
import VerticalNav from "./VerticalNav";
import HorizontalNav from './HorizontalNav';
import CabCard from "./CabCard";
import Select from "react-select"
class MyRequests extends React.Component {
  constructor(props)
  {
    super(props) 
    this.state={
      requests:[],
      date:Date.now,
      fromValue : 'check',
      toValue : 'check',
      options:[]
    }

    this.filterResult=this.filterResult.bind(this)
    this.fromSelect = this.fromSelect.bind(this)
    this.toSelect = this.toSelect.bind(this)
  }

 

  filterResult()
  {
    axios.get('/api/fetchrequests')
    .then((response)=>{
      const data = response.data;
      const req = data.map((item,index)=>{
        if(item.to==this.state.toValue && item.from == this.state.fromValue)
        {
          return <CabCard key = {index} requesterName = {item.name} from = {item.from} to = {item.to} dateofrequest = {item.date}></CabCard>
        }
      })
      this.setState({requests : req})
    })
    .catch(err=>{
      console.log(err);
    })
  }
  componentDidMount()
  {
    axios.get("/api/fetchrequests")
    .then((response)=>{
        const data = response.data;
        const req = data.map((item,index)=>{
          return <CabCard key = {index} requesterName = {item.name} from = {item.from} to = {item.to} dateofrequest = {item.date}></CabCard>
        })
        this.setState({requests:req})
    })
    .catch((err)=>console.log(err));

    axios.get('/api/events/get')
    .then((response)=>{
      const data = response.data;
      console.log(data);
      const optionList = data.map((event,index)=>{
        return {value : event.eventName, label:event.eventName}
      })
      this.setState({options:optionList})
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  fromSelect(event)
  {
    this.setState({fromValue : event.label})
  }

  toSelect(event)
  {
    this.setState({toValue : event.label})
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
              <label>From :</label>
              <Select onChange = {this.fromSelect} options = {this.state.options}></Select>
              <label>To :</label>
              <Select onChange = {this.toSelect} options = {this.state.options}></Select>
              <div class="control">
                <button class="button is-link" onClick={this.filterResult}>Submit</button>
              </div>
                    {this.state.requests}
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

export default connect(mapStateToProps)(MyRequests);