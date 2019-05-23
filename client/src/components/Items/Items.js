import React, { Component } from "react";
import Button from "../Button/Button";
import "./Item.css";

const Items = props => {
  return (
    <div className="ItemButton">
      <ul>
        <p>{props.stock.name} - {props.stock.price} G</p>
        <p>{props.stock.info}</p>
      </ul>
      <Button name={"Buy"} />
    </div>
  )
};

export default Items;