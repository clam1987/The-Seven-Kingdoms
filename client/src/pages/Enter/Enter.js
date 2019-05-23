import React, { Component } from "react";
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom";


class Enter extends Component {

  render() {
    return (
      //fill with battle stuff added button as placeholder
      <div className="Enter">
      <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">BEND THE KNEE</h1>
          <h2 className="quote">When you play the game of thrones you win or you die</h2>
          <img src="https://media.giphy.com/media/2L3eveDEgjNFC/giphy.gif" alt="home" className="responsive"></img>
        <Link to="/town"><Button name="Enter World"/></Link>
      </div>
      </div>
    )
  }
}

export default Enter;
