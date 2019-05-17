import React, { Component } from "react";
import Button from "../Button";
import axios from 'axios';
import { Link } from "react-router-dom";

class Battle extends Component {
  state = {}

  render() {
    return (
      //fill with battle stuff added button as placeholder
      <div className="Battle">
        <h2>This is where the fights go down!</h2>
        <Button name={"Fight"} style={"round-button-circle"}/>
      </div>
    )
  }
}

export default Battle;
