import React from "react";
import Button from "./Button/Button"
import { Link } from "react-router-dom";
import "../pages/Inventory/Inventory.css";


function Cards(props) {
    return (
        //fill with Footer stuff added button as placeholder
        <div className="cardComp">
            {/* <h2>This is a footer</h2> */}
            {/* <Button name={"Logout"} style={"round-button-circle"}/> */}

            <div className="card">

                <img src={props.stock.img} alt="Jane" style={{ width: "100%" }} />
                <div className="container">

                    <h2 className="charName">{props.stock.name}</h2>
                    <p className="title">{props.stock.type}</p>
                    <p className="info">{props.stock.info}</p>

                    <p>
                        <ul className="listChar">
                            <li>   {props.stock.stats.hp}
                            </li>
                            <li> Hp: {props.stock.stats.hp}</li>
                            <li> Str: {props.stock.stats.str}</li>
                            <li> Def: {props.stock.stats.def}</li>
                            <li>Spd: {props.stock.stats.spd}</li>

                        </ul>
                    </p>
                    <p>
                        <Button name={"Equip"} style={"round-button-circle"} />
                    </p>
                    {/* <p><Link to="/enter"><Button name="Select Character"/></Link>
</p> */}
                </div>
            </div>

        </div>


    )
}

export default Cards;
