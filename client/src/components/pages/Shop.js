import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";


class Shop extends Component {


  render() {
    return (
      //fill with shop stuff added button as placeholder
      <div className="Shop">
        <h2>This is where you buy stuffs</h2>
        <Button name={"Buy"} style={"round-button-circle"}/>
        <Link to="/town"><Button name="Back to Town"/></Link>

      </div>
    )
  }
}

export default Shop;
