import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";

class Stats extends Component {

  render() {
    return (
      //fill with stats stuff added button as placeholder
      <div className="Stats">
        <h2>This is where you see yo stats bruh</h2>
        <Link to="/town"><Button name="Back to Town"/></Link>
      </div>
    )
  }
}

export default Stats;
