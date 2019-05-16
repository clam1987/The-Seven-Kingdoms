import React, { Component } from "react";
import Button from "../Button"

class Quest extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      //fill with quest stuff added button as placeholder
      <div className="Quest">
        <h2>This is where you pick yo quests</h2>
        <Button name={"Select"} style={"round-button-circle"} />
      </div>
    )
  }
}

export default Quest;
