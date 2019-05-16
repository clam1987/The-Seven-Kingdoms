import React, { Component } from "react";
import Button from "./Button"

function Footer(props){
    return (
      //fill with Footer stuff added button as placeholder
      <div className="Footer">
        <h2>This is a footer</h2>
        <Button name={"Logout"} style={"round-button-circle"}/>
      </div>
    )
}

export default Footer;
