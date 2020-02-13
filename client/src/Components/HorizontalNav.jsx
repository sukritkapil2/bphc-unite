import React from "react";
import Logo from "./images/logo.png";
import {NavLink} from "react-router-dom";
class HorizontalNav extends React.Component
{
    constructor()
    {
      super()
      this.state = {
      }
      this.showActive = this.showActive.bind(this)
    }

    showActive(event)
    {
       let container = document.getElementsByClassName("menu-list");
       console.log(container);
      
    
    }

    render()
    {
        return (
          <div className="box has-background-white-ter		">
          <div className="menu ">
            <p className="menu-label"><span className="is-primary"><b>General</b></span></p>

            <ul className="menu-list">
            <li>
              <NavLink to= "dashboard" activeClassName="is-active current"><a>Dashboard</a></NavLink>
            </li>
            <li>
                <NavLink to = "cabs" activeClassName="is-active current"><a> Cab Sharing</a></NavLink>
            </li>
            </ul>

            <p className="menu-label">  Administration</p>
              <ul className="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
              <a >Manage Your Team</a>
                <ul>
                <li>
                  <a>Members</a>
                </li>
                <li>
                  <a>Plugins</a>
                </li>
                <li>
                  <a>Add a member</a>
                </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p className="menu-label">Transactions</p>
            <ul className="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </div>
          </div>
        );
    }

} 

export default HorizontalNav;
