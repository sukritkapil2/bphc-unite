import React from "react";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import CabRequests from "./CabRequests";
import CabForm from "./CabForm";
import "../Stylesheets/main.css";
class CabPage extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <VerticalNav />
        </div>
        <div className="columns">
          <div className="column is-one-fifth sideNav">
            <HorizontalNav />
          </div>
          <div className="head">
            <div id="head2">
              <p className="text">AVAILABLE CABS</p>
            </div>
            <div className="columns box is-paddingless" id="box2">
              <CabRequests></CabRequests>
              <CabForm></CabForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CabPage;
