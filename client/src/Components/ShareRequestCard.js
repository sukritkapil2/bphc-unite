import React from "react";
import moment from "moment"
import axios from "axios";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";


class ShareRequestCard extends React.Component {
    constructor(props) {
        super(props);
        this.onAccept = this.onAccept.bind(this);
        this.onReject=this.onReject.bind(this);
        this.state = { count: 0};
    }
    onAccept() {
        var flag1=0;
        var flag2=0;
        axios.get("/api/counter/")
            .then(response => {
                const data = response.data.map((item, index) => {

                    if (item.Field === "CarPool") {
                        
                        return item.Counter 
                        
                    }
                });
                this.setState({ count: data[1] })
        axios.get("/api/member/")
            .then(res => {
                res.data.map((item) => {
                        item.members.map((value) => {
                        if (value === this.props.user.name) {
                            flag1=1;
                        }
                    });
                    if (item.date === this.props.dateofrequest && item.from === this.props.from && item.to === this.props.to ) {
                        flag2=1;              
                    }
                });
                if (flag1 === 1 && flag2 === 1) {
                    const updateReq = { 
                        id:this.props.id,
                        member: this.props.requesterName }
                    axios
                        .post("/api/member/update", updateReq)
                        
                    toast.success("You have Accepted a Request Had  a Request!", {
                        position: toast.POSITION.TOP_RIGHT
                    });    
                }
                else
                {
                    
                    const newReq={
                        id:this.state.count +1,
                        member1:this.props.requesterName,
                        member2:this.props.user.name,    
                        date:this.props.dateofrequest,
                        to:this.props.to,
                        from:this.props.from    
                    }
                    axios
                        .post("/api/member/request", newReq)
                    const updateCount={
                        Field:"CarPool",
                    }
                    axios
                        .post("/api/counter/update", updateCount)    
                    const updateShare = {
                        id: this.props.id,
                        status:"accepted"
                    }
                    axios
                        .post("/api/share/update", updateShare)  
                    toast.success("You have Accepted a Request New Request !", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                
            })
                
            .catch(err => {
                console.log(err);
            });
    });
}
    onReject()
    {
        const update={
            id:this.props.id,
            status:"rejected"
        }
        axios
            .post("/api/share/update", update)
            
    }

    render() {
        const dateobj = moment(this.props.dateofrequest);
        var newDateObj = moment(dateobj).toDate();
        var date = moment(newDateObj).format("DD/MM/YY");
        var time = moment(newDateObj).format("HH:mm");
        return (
            <div>
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">{this.props.requesterName} wants to ride with you</p>
                        <a href="#" class="card-header-icon" aria-label="more options">
                            <span class="icon">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            {this.props.message}
                            <br />
                            <time datetime="2016-1-1">
                                <b>Date :</b>
                                {date}
                            </time>
                            <br />
                            <time datetime="2016-1-1">
                                <b>Time :</b>
                                {time}
                            </time>
                            <br />
                            <b>From :</b>
                            {this.props.from}
                            <br />
                            <b>To :</b>
                            {this.props.to}
                            <br />
                            <b>Message :</b>
                            {this.props.message}
                            <br />

                        </div>
                    </div>
                    <footer class="card-footer">
                        <a
                            href="#"
                            class="card-footer-item has-text-primary"
                            onClick={this.onAccept}
                        >
                            Accept
            </a>
                        {/* <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a> */}
                        <a
                            href="#"
                            class="card-footer-item has-text-primary"
                            onClick={this.onReject}
                        >
                            Reject
            </a><ToastContainer></ToastContainer>
                    </footer>
                </div>
                <br />
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    };
};

export default connect(mapStateToProps)(ShareRequestCard);