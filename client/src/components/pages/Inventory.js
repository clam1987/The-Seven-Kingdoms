import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";


class Inventory extends Component {

  render() {
    return (
      //fill with Inventory stuff added button as placeholder
      <div className="Inventory">
        <h2>This is where you see your items!</h2>
        <Button name={"Equip"} style={"round-button-circle"}/>
        <Link to="/town"><Button name="Back to Town"/></Link>
      </div>
    )
  }
}

export default Inventory;
