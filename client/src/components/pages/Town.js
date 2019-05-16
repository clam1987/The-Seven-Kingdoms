import React, { Component } from "react";
import Button from "../Button"

//moved this into pages folder and did minor "restructure"

class Town extends Component {

  render() {
    return (
      <div className="Town">
        <div className="container">
          <div className="jumbotron">
          <h1 className="display-4">Game Title</h1>
          {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
          <img src="https://ak4.picdn.net/shutterstock/videos/12265754/thumb/1.jpg" alt="home" className="responsive"></img>
          </div>
          <Button name={"Shop"} style={"round-button-circle"}/>
          <Button name={"Stats"} style={"round-button-circle"}/>
          <Button name={"Inventory"} style={"round-button-circle"}/>
          <Button name={"Quest"} style={"round-button-circle"}/>
        </div>
      </div>
    )
  }
}

export default Town;
