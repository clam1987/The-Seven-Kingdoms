import React, { Component } from "react";
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom";
import stats from "../../data/player";
import StatsList from "../../components/StatsList/StatsList"
import "./Stats.css";

class Stats extends Component {
  state= {
    stat: stats
  }

  render() {

    return (
      //fill with stats stuff added button as placeholder
      <div className="Stats">
<div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">Stats</h1>
        {/* <h2 className="quote">A Lannister always pays his debts </h2>       */}
        <div>
        <img src="https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg" alt="Jane"/>

        </div>
        
        <StatsList
        name={this.state.stat.name}
        lvl={this.state.stat.lvl}
        hp={this.state.stat.hp}
        str={this.state.stat.str}
        def={this.state.stat.def}
        spd={this.state.stat.spd}
        gold={this.state.stat.gold}
        exp={this.state.stat.exp}
        expToNextLvl={this.state.stat.expToNextLvl}
      />

        <Link to="/town"><Button name="Back to Town"/></Link>
      </div>
      </div>
    )
  }
}

export default Stats;
