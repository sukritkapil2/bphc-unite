import React from "react";
import { connect } from "react-redux";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import "../Stylesheets/maingroup.css";
import Axios from "axios";
import GroupCard from "../Components/GroupCard.js";
import { ToastContainer, toast } from "react-toastify";

const initalState = {
  group: []
};

class CabGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = initalState;
  }
  render() {
    Axios.get("/getgroups")
      .then(res => {
        console.log("Groups: " + res.data);
        const groups = res.data;
        this.setState({ group: groups });
      })
      .catch(err => {
        console.log("Error in fetching groups" + err);
      });

    const grouparr = this.state.group;
    const groupcards = grouparr.map((item, index) => {
      return (
        <GroupCard
          key={index}
          name={item.name}
          members={item.members}
          date={item.date}
          from={item.from}
          to={item.to}
        ></GroupCard>
      );
    });
    return (
      <div>
        <div className="box" id="nav1">
          <VerticalNav />
        </div>
        <div className="columns">
          <div className="column is-one-fifth sideNav">
            <HorizontalNav />
          </div>
        </div>
        <div id="groupbox">
          <p className="grouptext">Cab Groups</p>
          <div class="container2">{groupcards}</div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(CabGroup);
