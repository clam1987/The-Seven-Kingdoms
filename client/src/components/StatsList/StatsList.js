import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";


const StatsList = (props) => {
    return (
        <div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Level: {props.lvl}</li>
                <li>HP: {props.hp}</li>
                <li>Strength: {props.str}</li>
                <li>Defense: {props.def}</li>
                <li>Speed: {props.spd}</li>
                <li>Gold: {props.gold}</li>
                <li>Experience: {props.exp}</li>
                <li>Experience to Next Level: {props.expToNextLvl}</li>

            </ul>
            <Link to="/battle"><Button name={"Select"} style={"round-button-circle"} questComplete={props.boolean} /></Link>
        </div>
    )
}

export default StatsList;
