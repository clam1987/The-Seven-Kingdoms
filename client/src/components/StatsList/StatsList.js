import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const StatsList = (props) => {
    return (
        <div>
            <ul>
                <p>Name: {props.name}</p>
                <p>Level: {props.lvl}</p>
                <p>HP: {props.hp}</p>
                <p>Strength: {props.str}</p>
                <p>Defense: {props.def}</p>
                <p>Speed: {props.spd}</p>
                <p>Gold: {props.gold}</p>
                <p>Experience: {props.exp}</p>
                <p>Experience to Next Level: {props.expToNextLvl}</p>

            </ul>
            <Link to="/battle"><Button name={"Select"} style={"round-button-circle"} questComplete={props.boolean} /></Link>
        </div>
    )
}

export default StatsList;
