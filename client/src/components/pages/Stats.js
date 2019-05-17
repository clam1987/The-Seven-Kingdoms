import React, { Component } from "react";
import Button from "../Button"
import { Link } from "react-router-dom";
import StatsInfo from "../../StatsInfo";
import StatsList from "../StatsList/StatsList"
import "./Stats.css";





class Stats extends Component {
  state= {
    stats: StatsInfo
  }

  render() {
    const handleStat = this.state.stats.map((stat) =>
    <StatsList
    name={stat.name}
    lvl={stat.lvl}
    hp={stat.hp}
    str={stat.str}
    def={stat.def}
    spd={stat.spd}
    gold={stat.gold}
    exp={stat.exp}
    expToNextLvl={stat.expToNextLvl}
  />


    
    );
    return (
      //fill with stats stuff added button as placeholder
      <div className="Stats">
<div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayChar">Stats</h1>
        {/* <h2 className="quote">A Lannister always pays his debts </h2>       */}
          {handleStat}

        <Link to="/town"><Button name="Back to Town"/></Link>
      </div>
      </div>
    )
  }
}

export default Stats;
