import React, { Component } from "react";
import Button from "../Button"

class Inventory extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      //fill with Inventory stuff added button as placeholder
      <div className="Inventory">
        <h2>This is where you see your items!</h2>
        <Button name={"Equip"} style={"round-button-circle"}/>
      </div>
    )
  }
}

export default Inventory;
