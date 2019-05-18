import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const QuestList = (props) => {
    return (
        <div>
        <ul>
            <li>Quest Name: {props.name} </li>
            <p>Description: {props.description}</p>
        </ul>
        <Link to="/battle"><Button name={"Select"} style={"round-button-circle"} questComplete={props.boolean} /></Link>
        </div>
    )
}

export default QuestList;
