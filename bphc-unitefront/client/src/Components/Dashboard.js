import React from "react";
import VerticalNav from "./VerticalNav";
import HorizontalNav from "./HorizontalNav";
import "./main.css";

class Dashboard extends React.Component {
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
          <div>
            <div className="column box">
              <div id="content">
                <center>
                  <b>
                    Welcome User
                    <hr />
                  </b>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
