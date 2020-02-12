import React from "react";
import Logo from "./images/logo.png";

class HorizontalNav extends React.Component
{
    render()
    {
        return (
          <div class="menu" width="30">
            <p class="menu-label"><span>General</span></p>
            <ul class="menu-list">
              <li>
                <a>  Dashboard</a>
              </li>
              <li>
                <a>  Customers</a>
              </li>
            </ul>
            <p class="menu-label">  Administration</p>
            <ul class="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a class="is-active">Manage Your Team</a>
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
            <p class="menu-label">Transactions</p>
            <ul class="menu-list">
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
        );
    }

} 

export default HorizontalNav;
