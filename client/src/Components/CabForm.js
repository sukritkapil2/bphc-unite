
import React from "react";
import Calendar from "./Calendar"
import { connect } from 'react-redux'
import axios from 'axios'
import "../Stylesheets/cabform.css";
import Select from "react-select";

class CabForm extends React.Component {
  constructor(props){
    super(props);
    this.submitRequest=this.submitRequest.bind(this);
    this.updateText=this.updateText.bind(this);
    this.setDate=this.setDate.bind(this)
    this.state={value: '',date:Date.now,fromValue:'check',toValue:'check', options:[]};
    this.fromSelect=this.fromSelect.bind(this)
    this.toSelect = this.toSelect.bind(this)

  }
  componentDidMount()
  {
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
  updateText(event)
  {
    this.setState({value:event.target.value});
    console.log(this.state.value)
  }
  submitRequest(event)
  {
    console.log(this.props.user)
      event.preventDefault();
      console.log(this.state.value)
      const newRequest={
          name:this.props.user.name,
          msg:this.state.value,
          date:this.state.date,
          emailID:this.props.user.email,
          from:this.state.fromValue,
          to:this.state.toValue
      }
        console.log(newRequest);
        axios.post('/api/cabs/request', newRequest)
        .then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
          console.log("CabForm")
        });
        
  }
  setDate(childData)
  {
    this.setState({date:childData})
    console.log(this.state.date)
  }
  fromSelect(event)
  {
    console.log(event);
    this.setState({fromValue : event.label})
    console.log(this.state)
  }
  toSelect(event) {
    this.setState({ toValue: event.label})
    console.log(this.state)
  }
  render() {
    
    return (
      <div className="column is-half">
        <b>Form</b>


        <div class="field">
          <label class="label">Departure Time</label>
          <Calendar setDate={this.setDate}/>
        </div>
        <label class="label">From</label>
        <div class="control">
          
            <Select onChange={this.fromSelect} options={this.state.options}/>
            
          
          <label class="label">To</label>
          <div class="control">
            
              <Select onChange={this.toSelect} options = {this.state.options}/>
            
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea" onChange={this.updateText} value={this.state.value}></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" onClick={this.submitRequest}>Submit</button>
          </div>
          
        </div>

      </div>
    </div>
    )
    
      }
    }
    
const mapStateToProps = (state)=>{
  return {
          user : state.auth
      }
    }
    
export default connect(mapStateToProps)(CabForm);