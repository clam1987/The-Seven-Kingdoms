import React, { Component } from "react";
import Button from "../Button/Button"
import "./FightBox.css";

function FightBox(props){
    return (
      <div className="FightBox">
        <div class="scroll-box">
          <p>
            <h3>Round: {props.round}</h3>
            <h2>{props.enemy}</h2>
            <h4>{props.pDmg}</h4>
            <h4>{props.mDmg}</h4>
            <h5>{props.pName}'s HP: {props.pHP}</h5>
            <h5>{props.monster[props.killed].name}'s HP: {props.mHP}</h5>
            <h2>{props.win}</h2>
            {/*Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. The show was filmed in Belfast and elsewhere in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, Spain, and the United States.[1] The series premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons. Set on the fictional continents of Westeros and Essos, Game of Thrones has several plots and a large ensemble cast, and follows several story arcs. One arc is about the Iron Throne of the Seven Kingdoms, and follows a web of alliances and conflicts among the noble dynasties either vying to claim the throne or fighting for independence from it. Another focuses on the last descendant of the realm's deposed ruling dynasty, who has been exiled and is plotting a return to the throne, while another story arc follows the Night's Watch, a brotherhood defending the realm against the fierce peoples and legendary creatures of the North.

            Game of Thrones attracted record viewership on HBO and has a broad, active, international fan base. It has been acclaimed by critics, particularly for its acting, complex characters, story, scope, and production values, although its frequent use of nudity and violence (including sexual violence) has been criticized. The series received 47 Primetime Emmy Awards, the most by a drama series, including Outstanding Drama Series in 2015, 2016, and 2018. Its other awards and nominations include three Hugo Awards for Best Dramatic Presentation (2012–2014), a 2011 Peabody Award, and five nominations for the Golden Globe Award for Best Television Series – Drama (2012 and 2015–2018).

            Of the ensemble cast, Peter Dinklage has won three Primetime Emmy Awards for Outstanding Supporting Actor in a Drama Series (2011, 2015 and 2018) and the Golden Globe Award for Best Supporting Actor – Series, Miniseries or Television Film (2012) for his performance as Tyrion Lannister. Lena Headey, Emilia Clarke, Kit Harington, Maisie Williams, Nikolaj Coster-Waldau, Diana Rigg, and Max von Sydow have also received Primetime Emmy Award nominations for their performances.*/}
          </p>
        </div>
      </div>
    )
  }

export default FightBox;
