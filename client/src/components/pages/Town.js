import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";

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
          <Link to="/shop"><Button name="Shop"/></Link>
          <Link to="/inventory"><Button name="inventory"/></Link>
          <Link to="/stats"><Button name="Stats"/></Link>
          <Link to="/quest"><Button name="Quests"/></Link>
        </div>
      </div>
    )
  }
}

export default Town;
