
import React from "react";
import Calendar from "./Calendar"
import { connect } from 'react-redux'
import axios from 'axios'
import { set } from "mongoose";

class CabForm extends React.Component {
  constructor(props){
    super(props);
    this.submitRequest=this.submitRequest.bind(this);
    this.updateText=this.updateText.bind(this);
    this.setDate=this.setDate.bind(this)
    this.state={value: '',date:Date.now};
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
          emailID:this.props.user.email
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
  render() {
    return (
      <div className="column is-half">
        <center><b>Form</b></center>


        <div class="field">
          <label class="label">Departure Time</label>
          {/* <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div> */}
          <Calendar setDate={this.setDate}/>
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
    )

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(CabForm);