
import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import { set } from "mongoose";
import VerticalNav from "./VerticalNav";
import HorizontalNav from './HorizontalNav';
import CabCard from "./CabCard";
import Calendar from "./Calendar";
import moment from 'moment';
class MyRequests extends React.Component {
  constructor(props)
  {
    super(props) 
    this.state={
      requests:[],
      date:Date.now
    }
    this.setDate=this.setDate.bind(this)
    this.filterResult=this.filterResult.bind(this)
    this.refresh=this.refresh.bind(this)
  }

  setDate(childData)
  {
    this.setState({date:childData})
    console.log(this.state.date)
  }

  filterResult()
  {
    this.refresh();
    const newstate = this.state.requests.map((item,index)=>{
        if(moment(item.date).isSame(this.state.date,'minutes'))
        {
            return <CabCard requesterName = {item.name} key={index} dateofrequest={item.date} msg={item.msg}/>
        }
    })
    this.setState({requests:newstate})
    this.render();
  }
  refresh()
  {
    axios.get("/api/fetchrequests")
    .then((response)=>{
        const data = response.data;
        this.setState({requests:data})
        console.log(this.state);
    })
    .catch((err)=>console.log(err));
  }
  render() {
    const reqrev = this.state.requests.reverse();
    const req = reqrev.map((item,index)=>
    {
        return <CabCard requesterName = {item.name} key={index} dateofrequest={item.date} msg={item.msg}/>
    })
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
              <div class="control">Search by Date and Time : <Calendar  setDate={this.setDate}/></div>
              <div class="control">
                <button class="button is-link" onClick={this.filterResult}>Submit</button>
              </div>
                    {req}
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