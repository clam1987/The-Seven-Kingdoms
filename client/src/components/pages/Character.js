import React, { Component } from "react";
import Button from "../Button"

class Character extends Component {

  render() {
    return (
      //fill with Character stuff added button as placeholder
      <div className="Character">
        <h2>This is where you make your Character</h2>
        <Button name={"Create"} style={"round-button-circle"}/>
      </div>
    )
  }
}

export default Character;
