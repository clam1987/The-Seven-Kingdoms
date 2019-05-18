import React, { Component } from "react";
import Button from "../Button/Button";
import "./ShowQuests.css";
import { Link } from "react-router-dom";


const ShowQuests = props => {
  return (
    <div className="Items">
      <ul>
        <li>{props.quest.name}: {props.quest.description}</li>
      </ul>
      <Link to="/battle"><Button name="Start Quest"/></Link>
    </div>
  )
};

export default ShowQuests;