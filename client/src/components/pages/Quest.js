import React, { Component } from "react";
import Button from "../Button";
import quests from "../../questList";
import { Link } from "react-router-dom";
import ShowQuests from "../ShowQuests"
import "./Quest.css";


class Quest extends Component {


  state= {
    quests: quests
}

render() {
  const displayQuest = this.state.quests.map((quest) =>
  <ShowQuests
    key={quest.id}
    quest={quest}
  />
);

  return (
    <div className="Quest">
    <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
        <h1 className="displayChar">QUESTS</h1>
        <h1 className="ribbon">
   <strong class="ribbon-content" id="quest">A Lannister always pays his debts</strong>
</h1>
      {/* <h2 className="quote">A Lannister always pays his debts </h2> */}
      {/* <Button name={"Select"} style={"round-button-circle"} /> */}
      <Link to="/town"><Button name="Back to Town"/></Link>
    {displayQuest}

    </div>
    </div>
    )
  }
}
export default Quest;
