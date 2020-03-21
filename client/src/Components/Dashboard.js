import React from "react"
import VerticalNav from "./VerticalNav"
import HorizontalNav from "./HorizontalNav"
import "../Stylesheets/main.css"
import {connect} from 'react-redux'
import { render } from "react-dom"
import Login from './Login'

const Dashboard = (props)=>
{
  const renderContent = ()=>
    {
        switch(props.user){
            case null :
                return(
                    <Login/>
                    
                )
                
            case false :
                return(
                    <Login/>
                )
            default :
            return (
              <div>
                <div className="box"id="nav1">
                  <VerticalNav />
                </div>
                <div className="columns">
                  <div className="column is-one-fifth sideNav">
                    <HorizontalNav />
                  </div>
                  <div>
                  <div className="column box" id="nav1">
                      <div id="content"><center><b className="text1">Welcome {props.user.name}<hr/></b></center></div>
                  </div>
                  </div>
                </div>
                
               
              </div>
            );  
                
        }
    }

    return(
      <div>
        {renderContent()}
      </div>
    )
  
}

const mapStateToProps = (state)=>{
  return {
    user : state.auth
  }
}

export default connect(mapStateToProps)(Dashboard);