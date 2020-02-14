import React from "react"
import HorizontalNav from "./HorizontalNav"
import VerticalNav from "./VerticalNav"
import CabRequests from "./CabRequests"
import CabForm from "./CabForm";
import "./main.css"
class CabPage extends React.Component
{
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
              <center><b>AVAILABLE CABS<hr/></b></center>
              <div className="columns box is-paddingless	">
                  
                  <CabRequests></CabRequests>
                  <CabForm></CabForm>
              </div>
              </div>
            </div>
            
           
          </div>
        )
    }
}

export default CabPage