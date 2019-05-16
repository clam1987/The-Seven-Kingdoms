import React, { Component } from "react";
import Button from "../Button"

class Shop extends Component {


  render() {
    return (
      //fill with shop stuff added button as placeholder
      <div className="Shop">
        <h2>This is where you buy stuffs</h2>
        <Button name={"Buy"} style={"round-button-circle"}/>
      </div>
    )
  }
}

export default Shop;
