import React from "react"
import VerticalNav from "./VerticalNav"
import HorizontalNav from "./HorizontalNav"
class Dashboard extends React.Component
{
    render()
    {
        return (
          <div>
            <div className="box">
              <VerticalNav />
            </div>
            <div className="columns">
              <div className="column is-one-fifth">
                <HorizontalNav />
              </div>
              <div className="column">dashboard</div>
            </div>
          </div>
        );
    }
}

export default Dashboard;