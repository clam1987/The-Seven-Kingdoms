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

    {/* {items} */}
    <div className="row">
  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/daily/vulture/2019/05/07/07-game-of-thrones-kit-harrington.w700.h700.jpg" alt="Jane" style={{width: "100%"}}/>
      <div className="container">
        <h2 className="charName">Tormund's Horn-Drink</h2>
        <p className="title">Potion</p>
        <p>
        <ul className="listChar">
                <li>Price: 45</li>
                <li>Str: 50</li>
               
            </ul>
        </p>
        <p><Button name={"Equip"} style={"round-button-circle"}/>
</p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/daily/vulture/2015/06/17/17-arya-game-of-thrones.w700.h700.jpg" alt="Mike" style={{width: "100%"}}/>
      <div className="container" >
        <h2 className="charName">Arya's Sword</h2>
        <p className="title">Weapon</p>
        <p>
          <ul className="listChar">
                <li>Price: 50</li>
                <li>Str: 50</li>
              
            </ul></p>
            <p><Button name={"Equip"} style={"round-button-circle"}/>
</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/fashion/daily/2019/04/15/15-daenerys-got.w700.h700.jpg" alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2 className="charName">Melisandre's Amulet</h2>
        <p className="title">Necklace</p>
        <p>
        <ul className="listChar">

                <li>Price: 70</li>
                <li>HP: 70</li>
                
            </ul></p>
            <p><Button name={"Equip"} style={"round-button-circle"}/>
</p>
      </div>
    </div>
  </div>
  </div>
  <div className="row">
  <div className="column">
    <div className="card">
      <img src="https://images.ontheedgebrands.com/images/var/C43-JL8161_700.jpg" alt="Jane" style={{width: "100%"}}/>
      <div className="container">
        <h2 className="charName">Khal's Linecloth</h2>
        <p className="title">Armor</p>
        <p>
        <ul className="listChar">
                <li>Price: 50</li>
                <li>Str: 60</li>
       
            </ul>
        </p>
        <p><Button name={"Equip"} style={"round-button-circle"}/>
</p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/daily/vulture/2014/05/29/29-game-of-thrones-tyrion-drinking.w700.h700.jpg" alt="Mike" style={{width: "100%"}}/>
      <div className="container" >
        <h2 className="charName">Tyrion's Vest</h2>
        <p className="title">Armor</p>
        <p>
          <ul className="listChar">
                <li>price: 40</li>
                <li>Spd: 50</li>
                
            </ul></p>
        <p><Button name={"Equip"} style={"round-button-circle"}/>
</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="https://i.pinimg.com/originals/4a/88/fa/4a88faadb20fec955ea9422916caa9a2.jpg" alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2 className="charName">Sansa's Robe</h2>
        <p className="title">Armor</p>
        <p>
        <ul className="listChar">
                <li>Price: 25</li>
                <li>Def: 50</li>
                
            </ul></p>
        <p><Button name={"Equip"} style={"round-button-circle"}/>
</p>
      </div>
    </div>
  </div>
  </div>
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
