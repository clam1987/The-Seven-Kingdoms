import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";


class Quest extends Component {


  render() {
    return (
      //fill with quest stuff added button as placeholder
      <div className="Quest">
        <h2>This is where you pick yo quests</h2>
        <Button name={"Select"} style={"round-button-circle"} />
        <Link to="/town"><Button name="Back to Town"/></Link>

      </div>
    )
  }
}

export default Quest;
