import React from "react";
import moment from "moment"
class CabCard extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        // const dateinfo = this.props.dateofrequest.split('T');
        // const date = dateinfo[0];
        // const time = dateinfo[1];
        // const dateobj = date.parse(this.props.dateofrequest);
        const dateobj = moment(this.props.dateofrequest);
        var newDateObj = moment(dateobj).toDate();
        var date = moment(newDateObj).format('DD/MM/YY')
        var time = moment(newDateObj).format('HH:mm')
        return(
            <div>
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                {this.props.requesterName}
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </a>
            </header>
            <div class="card-content">
                <div class="content">
                {this.props.message}
                <br/>
                <time datetime="2016-1-1"><b>Date :</b>{date}</time>
                <br/>
                <time datetime="2016-1-1"><b>Time :</b>{time}</time>
                <br />
                <b>From :</b>{this.props.from}
                <br />
                <b>To :</b>{this.props.to}
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item has-text-primary">Send Request</a>
                {/* <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a> */}
            </footer>
            </div>
            <br/>
            </div>
        )
    }
}

export default CabCard;