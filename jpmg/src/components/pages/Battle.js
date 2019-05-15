import React, { Component } from "react";
import Button from "../Button"

class Battle extends Component {
  constructor() {
    super()
  }

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
