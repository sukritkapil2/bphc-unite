import React from "react";
import "../Stylesheets/main3.css";

class AdminPage extends React.Component {
  onClick(event) {
    window.localStorage.removeItem("authToken");
    window.location.href = "/adminlogin";
  }

  render() {
    return (
      <div>
        <div className="AdminPage">
          <button
            className="btn btn-primary btn-large buttonlogout"
            onClick={this.onClick}
          >
            LOGOUT
          </button>
          <div class="card">
            <p class="text">FEEDBACK FROM USERS<br></br> WILL APPEAR HERE</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
