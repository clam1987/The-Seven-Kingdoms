import React, { Component } from "react";
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom";
import "./Inventory.css";
import Cards from "../../components/Cards";
import inventory from "../../data/inventory";



class Inventory extends Component {
  state= {
  inv: inventory
}
  render() {
    const items = this.state.inv.map(item => <Cards key={item.id} stock={item} />);

    return (
      //fill with Inventory stuff added button as placeholder
      <div className="Inventory">
        <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">Gendry's Lair</h1>
          <h2 className="quote">A Lannister always pays his debts </h2>
          <Link to="/town"><Button name="Back to Town"/></Link>
        </div>
      <div className="container">
    {/* <img src="https://media.moddb.com/images/mods/1/35/34192/inventory.png" alt="home2" className=""></img> */}
      <h1 className="ribbon" id="ribbonOne">
      <strong className="ribbon-content">Inventory</strong>
    </h1>

    {items}

{/*
<ul>
  <li>Weapon</li>
  <li>Armor</li>
  <li>Helmet</li>
  <li>Amulet</li>
  <li>Boots</li>
  <li>Belt</li>
  <li>Scrolls</li>
  <li>Potion</li>

</ul> */}
      {/* <Button name={"Equip"} style={"round-button-circle"}/> */}

    </div>
  </div>



    )
  }
}

export default Inventory;
