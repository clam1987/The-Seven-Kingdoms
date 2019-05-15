import React, { Component } from "react";
import Button from "../Button"

class Login extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      //fill with login stuff added button as placeholder
      <div className="Login">
        <h2>This is where you login</h2>
        <Button name={"Login"} style={"round-button-circle"}/>
      </div>
    )
  }
}

export default Login;
