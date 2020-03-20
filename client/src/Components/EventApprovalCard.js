import React from "react";
import { connect } from 'react-redux'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class EventApprovalCard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {status:this.props.status}
        this.deleteLocation = this.deleteLocation.bind(this)
        this.approveLocation = this.approveLocation.bind(this)
    }

    deleteLocation()
    {
        console.log("METHOD FIRED");
        const deletedEvent={
            id : this.props.id,
            status:this.state.status,
            eventName:this.props.eventName,
            eventAddr:this.props.eventAddr
        }
        let deleteFlag=0;
        axios.post("/api/events/delete",deletedEvent)
            .then((res)=>{
                console.log(res.data);
                deleteFlag=1;
            })
            .catch((err)=>{console.log(err)});
        
        toast.error("Event deleted", {
            position: toast.POSITION.TOP_RIGHT
        });
        
                
    }

    approveLocation()
    {
        
        const approvedEvent={
            id : this.props.id,
            status:this.state.status,
            eventName:this.props.eventName,
            eventAddr:this.props.eventAddr
        }
        axios.post("/api/events/approve",approvedEvent)
            .then((res)=>{
                console.log(res.data);
                console.log(this.state);
            })
            .catch((err)=>{console.log(err)});
        toast.success("Event approved.Refresh the page.", {
            position: toast.POSITION.TOP_RIGHT
        });
       
        this.setState({status:"1"});
    }

    render()
    {
        let buttons;
        const status = this.state.status;
        if(status=="0"){
            buttons = <div>
                            <button class="button is-success" onClick = {this.approveLocation}>Accept</button>
                           &emsp; &emsp;
                           <button class="button is-danger" onClick = {this.deleteLocation}>Reject</button>
                     </div>
        } else {
            buttons = <div>
                             <a href = "#" onClick = {this.deleteLocation}><button class="button is-danger">Delete Location</button></a>
                      </div>
        }

        return(
            <div class="box">
            <article class="media">
                <div class="media-content">
                <div class="content">
                    <p>
                    <strong>{this.props.eventName}</strong>
                    <br/>
                    {this.props.eventAddr}
                    </p>
                </div>
                {buttons}
                </div>
            </article>
            <ToastContainer></ToastContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.auth
    }
  }
  
  export default connect(mapStateToProps)(EventApprovalCard);