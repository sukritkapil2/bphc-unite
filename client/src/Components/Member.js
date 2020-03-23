import React from "react";
import "../Stylesheets/maingroup.css";

class Member extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="button56">{this.props.name}</button>
      </div>
    );
  }
}

export default Member;
