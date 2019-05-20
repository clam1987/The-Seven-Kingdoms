import React, { Component } from "react";
import Button from "../../Button/Button";
import axios from 'axios';
import { Link } from "react-router-dom";
import player from "../../../players";
import monster from "../../../monsters";
import "./Battle.css";


class Battle extends Component {

  battle = (player, monster) => {

      let hp = player.hp;
      let atk = player.str;
      let def = player.def;
      let luk = player.luk;
      let speed = player.spd;
      let exp = player.exp;

      let hpM = monster.hp;
      let atkM = monster.str;
      let defM = monster.def;
      let lukM = monster.luk;
      let speedM = monster.spd;
      let expM = monster.expGiven;
      let cashM = monster.gold;

      let round = 1;

      while (hp > 0 && hpM > 0) {

        let test01;
        let test02;
        let power01;
        let block01;
        let p1Dmg;
        let p1Luck;
        let dmgFactor01;

        let test03;
        let test04;
        let power02;
        let block02;
        let p2Dmg;
        let p2Luck;
        let dmgFactor02

        //p1:
        test01 = (Math.random() * 100);
        //console.log(test01);
        test02 = luk * .2;
        //console.log(test02);
        dmgFactor01 = test01 + test02;
        //console.log(dmgFactor01);
        power01 = (dmgFactor01 / 3) * atk;
        //console.log(power01);
        block01 = def * (dmgFactor01 / 6);
        //console.log(block01);
        p1Luck = Math.floor(dmgFactor01 / 10);
        //console.log(p1Luck);

        //p2:
        test03 = (Math.random() * 100);
        //console.log(test03);
        test04 = lukM * .2;
        //console.log(test04);
        dmgFactor02 = test03 + test04;
        //console.log(dmgFactor02);
        power02 = (dmgFactor02 / 3) * atkM;
        //console.log(power02);
        block02 = defM * (dmgFactor02 / 6);
        //console.log(block02);
        p2Luck = Math.floor(dmgFactor02 / 10);
        //console.log(p2Luck);

        console.log(`Round ${round}:`);

        //p1 attack
        if (speed >= speedM) {
          p1Dmg = power01 - block02;
          if (p1Dmg > 0) {
            hpM -= p1Dmg;
          } else {
            p1Dmg = 0;
          }
          //console.log(hpM);

        switch (p1Luck) {
          case 11 :
          console.log(`${player.name} attacks, what LUCK! It's a one shot kill.`);
          hpM = 0;
          break;
          case 10 :
          console.log(`${player.name} attacks, it's a perfect strike! 40% bonus damage!`);
          hpM -= (p1Dmg * .4);
          break;
          case 9 :
          console.log(`${player.name} attacks and it's a MASSIVE blow!`);
          break;
          case 8 :
          console.log(`${player.name} attacks with amazing finesse!`);
          break;
          case 7 :
          console.log(`${player.name} hits with a strong attack!`);
          break;
          case 6 :
          console.log(`${player.name} lands a decent attack!`);
          break;
          case 5 :
          console.log(`${player.name} attacks!`);
          break;
          case 4 :
          console.log(`${player.name} attacks, it's a glancing blow.`);
          break;
          case 3 :
          console.log(`${player.name} attacks, he had no energy in that one.`);
          break;
          case 2 :
          console.log(`${player.name} attacks, he's looking tired out there.`);
          break;
          case 1 :
          console.log(`${player.name} practically misses...`);
          break;
          case 0 :
          console.log(`${player.name} misses!`);
          break;
          default:
          console.log('error');
          break;
        }

        if (hpM <= 0) {
          console.log(`${monster.name} takes ${Math.floor(p1Dmg)} damage and drops dead!\n`);
          }
        if (p1Luck != 0 && hpM >= 0) {
          console.log(`${monster.name} takes ${Math.floor(p1Dmg)} damage and has ${Math.floor(hpM)}hp remaining.\n`);
        }
      }
      if (hpM >= 1) {

        //p2 attack

        p2Dmg = power02 - block01;
        if (p2Dmg > 0) {
          hp -= p2Dmg;
        } else {
          p2Dmg = 0;
        }
        //console.log(hp);

        switch (p2Luck) {
          case 11 :
          console.log(`${monster.name} attacks, what LUCK! It's a one shot kill.`);
          hp = 0;
          break;
          case 10 :
          console.log(`${monster.name} attacks, it's a perfect strike! 40% bonus damage!`);
          hp -= (p2Dmg * .4);
          break;
          case 9 :
          console.log(`${monster.name} attacks and it's a MASSIVE blow!`);
          break;
          case 8 :
          console.log(`${monster.name} attacks with amazing finesse!`);
          break;
          case 7 :
          console.log(`${monster.name} hits with a strong attack!`);
          break;
          case 6 :
          console.log(`${monster.name} lands a decent attack!`);
          break;
          case 5 :
          console.log(`${monster.name} attacks!`);
          break;
          case 4 :
          console.log(`${monster.name} attacks, it's a glancing blow.`);
          break;
          case 3 :
          console.log(`${monster.name} attacks, he had no energy in that one.`);
          break;
          case 2 :
          console.log(`${monster.name} attacks, he's looking tired out there.`);
          break;
          case 1 :
          console.log(`${monster.name} practically misses...`);
          break;
          case 0 :
          console.log(`${monster.name} misses!`);
          break;
          default:
          console.log('error');
          break;
        }

        if (hp <= 0) {
          console.log(`${player.name} takes ${Math.floor(p2Dmg)} damage and drops dead!\n`);
        }
        if (p2Luck != 0 && hp >= 0) {
            console.log(`${player.name} takes ${Math.floor(p2Dmg)} damage and has ${Math.floor(hp)}hp remaining.\n`);
          }
        }
        if (hp >= 1 && speed < speedM) {
          p1Dmg = power01 - block02;
          if (p1Dmg > 0) {
            hpM -= p1Dmg;
          } else {
            p1Dmg = 0;
          }
          //console.log(hpM);

          switch (p1Luck) {
            case 11 :
            console.log(`${player.name} attacks, what LUCK! It's a one shot kill.`);
            hpM = 0;
            break;
            case 10 :
            console.log(`${player.name} attacks, it's a perfect strike! 40% bonus damage!`);
            hpM -= (p1Dmg * .4);
            break;
            case 9 :
            console.log(`${player.name} attacks and it's a MASSIVE blow!`);
            break;
            case 8 :
            console.log(`${player.name} attacks with amazing finesse!`);
            break;
            case 7 :
            console.log(`${player.name} hits with a strong attack!`);
            break;
            case 6 :
            console.log(`${player.name} lands a decent attack!`);
            break;
            case 5 :
            console.log(`${player.name} attacks!`);
            break;
            case 4 :
            console.log(`${player.name} attacks, it's a glancing blow.`);
            break;
            case 3 :
            console.log(`${player.name} attacks, he had no energy in that one.`);
            break;
            case 2 :
            console.log(`${player.name} attacks, he's looking tired out there.`);
            break;
            case 1 :
            console.log(`${player.name} practically misses...`);
            break;
            case 0 :
            console.log(`${player.name} misses!`);
            hpM += p1Dmg;
            break;
            default:
            console.log('error');
            break;
          }

          if (hpM <= 0) {
            console.log(`${monster.name} takes ${Math.floor(p1Dmg)} damage and drops dead!\n`);
            }
          if (p1Luck != 0 && hpM >= 0) {
            console.log(`${monster.name} takes ${Math.floor(p1Dmg)} damage and has ${Math.floor(hpM)}hp remaining.\n`);
          }

        }

        round += 1;
      }

      if (hp >= 1) {
        console.log(`${player.name} wins`);
        exp += expM;
        console.log(`You gained ${expM} exp!`);
        //experience(player);
        player.exp = exp;
        //console.log(player.exp);
        //console.log(player.lvl);

        //console.log(player.lvl);

        console.log(`The ${monster.name} dropped $${cashM} gold!`);
      }
      if (hpM >= 1) {
        console.log(`${monster.name} wins, you are dead!`);
      }
    };

  render() {

    console.log(player[0]);
    console.log(monster[0]);

    return (
      <div className="Battle">
      <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
      <img src="https://perezhilton.com/wp-content/uploads/2016/05/game-of-thrones-nights-king.gif" alt="home2" className="responsive"></img>

          <h1 className="displayBattle">Battle</h1>
          <h2 className="quote">What do we say to the God of Death? Not today.</h2>
          {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
        {/* <Button name={"Fight"} style={"round-button-circle"}/> */}
        <Button name={"Fight"} callback={() => {this.battle(player[0], monster[0])}} />
      </div>
      </div>
    )
  }
}

export default Battle;
