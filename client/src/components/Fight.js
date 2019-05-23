import React, { Component } from "react";

const Fight = props => {
  return (
    <div className="Fight">
      <h3>Round: {props.round}</h3>
      <p>{props.enemy}</p>

      <h4>{props.pName}'s HP: {props.pHP}</h4>
      <h4>{props.monster[props.killed].name}'s HP: {props.mHP}</h4>
      <p>{props.pDmg}</p>
      <p>{props.mDmg}</p>
      <h2>{props.win}</h2>
    </div>
  )
};

export default Fight;
