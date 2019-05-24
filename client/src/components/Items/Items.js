import React, { Component } from "react";
import Button from "../Button/Button";
import "./Item.css";

const Items = props => {
  return (
    <div className="ItemButton">
      <ul id="dispItem">
        <p>{props.stock.name} - {props.stock.price} G</p>
        <p>{props.stock.info}</p>
      </ul>
      <Button callback={() => {alert("Item Bought!")}} name={"Buy"} />
      <br />
      <br />
    </div>
  )
};

export default Items;
