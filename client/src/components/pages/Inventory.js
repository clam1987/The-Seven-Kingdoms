import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";
import "./Inventory.css";


class Inventory extends Component {

  render() {
    return (
      //fill with Inventory stuff added button as placeholder
      <div className="Inventory">
<div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">Gendry's Lair</h1>
        <h2 className="quote">A Lannister always pays his debts </h2>
        <Link to="/town"><Button name="Back to Town"/></Link>
        
      </div>
      <div className="container">
  <div className="row">
    <div className="col">
    <img src="https://media.moddb.com/images/mods/1/35/34192/inventory.png" alt="home2" className=""></img>
    </div>
    <div className="col">
    <h1 className="ribbon" id="ribbonOne">
   <strong className="ribbon-content">Inventory</strong>
</h1>
    {/* <h2 className="quote2">Inventory</h2> */}

      <h3 className="textInv">

<ul>
  <li>Weapon</li>
  <li>Armor</li>
  <li>Helmet</li>
  <li>Amulet</li>
  <li>Boots</li>
  <li>Belt</li>
  <li>Scrolls</li>
  <li>Potion</li>
  
</ul>
</h3>
      <Button name={"Equip"} style={"round-button-circle"}/>

    </div>
  </div>
      </div>
      </div>
      
      
    )
  }
}

export default Inventory;
