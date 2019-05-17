import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";


class Character extends Component {

  render() {
    return (
      //fill with Character stuff added button as placeholder
      <div className="Character">
        <h2>This is where you make your Character</h2>
        <Link to="/enter"><Button name="Create Character"/></Link>

      </div>
    )
  }
}

export default Character;
