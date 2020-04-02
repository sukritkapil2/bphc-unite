import React from "react";
import moment from "moment"
import axios from "axios";
import { connect } from "react-redux";


class UpcomingRideCard extends React.Component {
    constructor(props) {
        super(props);
        this.onCompleted = this.onCompleted.bind(this);
    }

    onCompleted()
    {

    }
   

    render() {
        const dateobj = moment(this.props.dateofrequest);
        var newDateObj = moment(dateobj).toDate();
        var date = moment(newDateObj).format("DD/MM/YY");
        var time = moment(newDateObj).format("HH:mm");
        
        return (
            <div>
        <div class="card2">
          <header class="card-header" id="head4">
            <p class="card-header-title" id="head4t">
              {this.props.requesterName}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content contentcard">
            <div class="content">
              <p id="p1">
                {/* <b>MESSAGE : </b>&nbsp;{this.props.message} */}
              </p>
              <div class="bar2">
                <div className="emptybar2"></div>
                <div className="filledbar2"></div>
              </div>
              <br/>
              <br/>
              <time datetime="2016-1-1" id="d1">
                <b>DATE : </b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}
              </time>
              <br />
              <time datetime="2016-1-1" id="t1">
                <b>TIME : </b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {time}
              </time>
              <br />
              <b>FROM : </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.from}
              <br />
              <b>TO : </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.props.to}
            </div>
          </div>

          <footer class="card-footer footcard">
            <a
              href="#"
              class="card-footer-item"
              id="lin1"
              onClick={this.onCompleted}
            >
              Ride Completed
            </a>
            {/* <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a> */}
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

export default connect(mapStateToProps)(UpcomingRideCard);