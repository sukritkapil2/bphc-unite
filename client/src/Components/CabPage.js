import React from "react"
import HorizontalNav from "./HorizontalNav"
import VerticalNav from "./VerticalNav"

class CabPage extends React.Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return(
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
                  <div id="content"><center><b>AVAILABLE CABS<hr/></b></center></div>
              </div>
              </div>
            </div>
            
           
          </div>
        )
    }
}

export default CabPage