import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";


class Enter extends Component {

  render() {
    return (
      //fill with battle stuff added button as placeholder
      <div className="Enter">
        <h2>This is where you enter the town!</h2>
        <Link to="/town"><Button name="Enter World"/></Link>
      </div>
    )
  }
}

export default Enter;
