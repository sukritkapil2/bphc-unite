import React from "react";
import moment from "moment";
import "../Stylesheets/main4.css"

class CabCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const dateinfo = this.props.dateofrequest.split('T');
    // const date = dateinfo[0];
    // const time = dateinfo[1];
    // const dateobj = date.parse(this.props.dateofrequest);
    const dateobj = moment(this.props.dateofrequest);
    var newDateObj = moment(dateobj).toDate();
    var date = moment(newDateObj).format("DD/MM/YY");
    var time = moment(newDateObj).format("HH:mm");
    return (
      <div>
        <div class="card2">
          <header class="card-header" id="head4">
            <p class="card-header-title" id="head4t">{this.props.requesterName}</p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content contentcard">
            <div class="content">
              <p id="p1"><b>MESSAGE : </b>&nbsp;{this.props.message}</p>
              <time datetime="2016-1-1" id="d1">
                <b>DATE : </b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}
              </time>
              <br />
              <time datetime="2016-1-1" id="t1">
                <b>TIME : </b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{time}
              </time>
              <br />
              <b>FROM : </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.from}
              <br />
              <b>TO : </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.to}
            </div>
          </div>
          <footer class="card-footer footcard">
            <a href="#" class="card-footer-item has-text-primary">
              SEND REQUEST
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

export default CabCard;
