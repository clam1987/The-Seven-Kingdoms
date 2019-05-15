import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="group">
        <div className="round-button" onClick={console.log("Hello")}>
          <div class={this.props.style}><a href="#" class="round-button">{this.props.name}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Button;
