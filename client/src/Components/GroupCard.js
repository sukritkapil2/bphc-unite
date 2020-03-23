import React from "react";
import Member from "../Components/Member.js";
import "../Stylesheets/maingroup.css";

class GroupCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const membarr = this.props.members;
    const membcards = membarr.map((item, index) => {
      console.log(item.name);
      return <Member key={index} name={item.name}></Member>;
    });
    return (
      <div>
        <div className="card6">
          <h3 className="title">Group: &nbsp;{this.props.name}</h3>
          <p className="title2">{this.props.date}</p>
          <div className="barcont">
            <div class="bar6">
              <div className="emptybar6"></div>
              <div className="filledbar6"></div>
            </div>
          </div>
          <div className="message34">
            <p className="mestext">Members : </p>
            <div className="bold23">{membcards}</div>
          </div>
          <button className="btn btn-primary" id="buttonl2">
            X
          </button>
        </div>
      </div>
    );
  }
}

export default GroupCard;
