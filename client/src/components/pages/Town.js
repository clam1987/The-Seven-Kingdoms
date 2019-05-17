import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";
import "./Town.css";

class Town extends Component {

  render() {
    return (
      <div className="Town">
        <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="display">Game of Thrones</h1>
          {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
          <img src="https://i.imgur.com/WpEjGvA.jpg" alt="home" className="responsive"></img>
         <div className="button">
          <Link to="/shop"><Button name="Shop"/></Link>
          <Link to="/inventory"><Button name="inventory"/></Link>
          <Link to="/stats"><Button name="Stats"/></Link>
          <Link to="/quest"><Button name="Quests"/></Link>
          </div>
          </div>
        </div>
      
    )
  }
}

export default Town;
