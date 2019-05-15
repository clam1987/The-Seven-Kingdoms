import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="group">
        <div className="round-button" onClick={console.log("Hello")}>
          <div class="round-button-circle"><a href="http://example.com" class="round-button">SHOP</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Button;
