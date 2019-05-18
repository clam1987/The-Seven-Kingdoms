import React, { Component } from "react";
import Button from "../../Button/Button"
import { Link } from "react-router-dom";
import inventory from "../../../shopStock";
import Items from "../../Item/Items";

class Shop extends Component {
  state = {
        inv: inventory,
      }

  render() {

    const stock = this.state.inv.map(item => <Items key={item.id} stock={item} />);
    return (
      //fill with shop stuff added button as placeholder
      <div className="Shop">
<div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">Shop</h1>
        <h2 className="quote">Everything is better with some wine in the belly </h2>        
        <Button name={"Buy"} style={"round-button-circle"}/>
        {stock}

        <Link to="/town"><Button name="Back to Town"/></Link>
      </div>
      </div>
    )
  }
}

export default Shop;
