import React, { Component } from "react";
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom";
import supply from "../../data/shopStock";
import Items from "../../components/Items/Items";

class Shop extends Component {
  state = {
        inv: supply,
      }

  render() {

    const stock = this.state.inv.map(item => <Items key={item.id} stock={item} />);
    return (
      //fill with shop stuff added button as placeholder
      <div className="Shop">
<div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">Shop</h1>
        <h2 className="quote">Everything is better with some wine in the belly </h2>
        {stock}

        <Link to="/town"><Button name="Back to Town"/></Link>
      </div>
      </div>
    )
  }
}

export default Shop;
