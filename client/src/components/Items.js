import React, { Component } from "react";
import Button from "./Button";

const Items = props => {
  return (
    <div className="Items">
      <ul>
        <p>{props.stock.name} - {props.stock.price} G</p>
        <p>{props.stock.info}</p>
      </ul>
      <Button name={"Buy"} />
    </div>
  )
};

export default Items;