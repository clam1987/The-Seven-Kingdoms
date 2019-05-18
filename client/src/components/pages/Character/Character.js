import React, { Component } from "react";
import Button from "../../Button/Button"
import { Link } from "react-router-dom";
import "./Character.css";


class Character extends Component {

  render() {
    return (
      //fill with Character stuff added button as placeholder
      <div className="Character">
      <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">Create Your Character</h1>
          <img src="https://i.imgur.com/x5kZ4aK.jpg" alt="home" className="responsive"></img>

        <h2 className="quote">Never forget what you are. The rest of the world will not. <br />
         Wear it like armor, and it can never be used to hurt you." </h2>
        <Link to="/enter"><Button name="Create Character"/></Link>
</div>
      </div>
    )
  }
}

export default Character;
