import React, { useState } from "react"
import VerticalNav from "./VerticalNav"
import HorizontalNav from "./HorizontalNav"
import "../Stylesheets/main.css"
import { connect } from 'react-redux'
import { render } from "react-dom"
import Login from './Login'
import ShareRequestCard from '../Components/ShareRequestCard'
import { axios } from 'axios'
import ShareRequests from './ShareRequests'
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: []
    }
    this.renderContent = this.renderContent.bind(this);

  }
  renderContent() {

    switch (this.props.user) {
      case null:
        return (
          <Login />

        )

      case false:
        return (
          <Login />
        )
      default:

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
                  <div id="content"><center><b>Welcome {this.props.user.name}<hr /></b></center>
                    <div className="columns box is-paddingless	">
                      <div className="column is-half">
                        <center><b>New Requests<hr /></b></center>
                        <div className="column pic-container">
                        <ShareRequests></ShareRequests>\
                        </div>
                    </div>
                      <div className="column is-half pic-container">
                        <center><b>Upcoming<hr /></b></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

    }
  }

  render() {

    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(Dashboard);