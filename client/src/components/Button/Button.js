import React from "react";

function Button(props){
  return (
    <button disabled={props.disabled} onClick={props.callback}>{props.name}</button>
  )
}

export default Button;
