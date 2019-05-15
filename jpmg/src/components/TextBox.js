import React, { Component } from "react";
import Button from "./Button"

class TextBox extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      //fill with Footer stuff added button as placeholder
      <div className="TextBox">
        <h2>Text Box</h2>
        <Button />
      </div>
    )
  }
}

export default TextBox;
