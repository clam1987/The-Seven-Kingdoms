import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Fight from "../../components/Fight"
import player from "../../data/player";
import monsters from "../../data/monsters";

class Battle extends Component {
  state = {
    defeated: 0,
    round: 1,

    playerName: player.name,

    playerHP: player.hp,
    playerSTR: player.str,
    playerDEF: player.def,
    playerSPD: player.spd,
    playerLUK: player.luk,
    playerEXP: player.exp,

    playerNextLvl: player.expToNext,
    playerGold: player.gold,

    monster: monsters,
  };

  setHP = (mHp) => {
    this.setState(() => {
      return {
        monsterHP: mHp
      }
    })
  };

  handleRound = () => {
    this.setState(prevState => {
      return {
        round: prevState.round + 1
      }
    })
  };

  handlePDamage = (dmg) => {
    this.setState(prevState => {
      if (prevState.monsterHP - dmg > 0) {
        return {
          monsterHP: prevState.monsterHP - dmg
        }
      } else {
        return {
          monsterHP: 0
        }
      }
    })
  };

  handleMDamage = (dmg) => {
    this.setState(prevState => {
      if (prevState.playerHP - dmg > 0) {
        return {
          playerHP: prevState.playerHP - dmg
        }
      } else {
        return {
          playerHP: 0
        }
      }
    })
  };

  handlePCombat = (msg) => {
    this.setState( () => {
      return {
        playerAttack: msg
      }
    })
  };

  handleMCombat = (msg) => {
    this.setState( () => {
      return {
        monsterAttack: msg
      }
    })
  };

  handleKill = () => {
    this.setState(prevState => {
      return {
        defeated: prevState.defeated + 1
      }
    })
  };

  handleWinner = (msg) => {
    this.setState( () => {
      return {
        winner: msg
      }
    })
  };

  handleEnemy = (msg) => {
    this.setState( () => {
      return {
        enemy: msg
      }
    })
  };

  handleDrops = (gold, exp) => {
    this.setState(prevState => {
      return {
        playerGold: prevState.playerGold + gold,
        playerEXP: prevState.playerEXP + exp
      }
    })
  };

  componentDidMount() {
    this.handleFight(this.state.monster[this.state.defeated])
  }

  handleFight = (monster) => {
    if (this.state.monsterHP === undefined) {
      this.handleWinner(null);
      let enemy = `Beware! a ${monster.name} approaches!`
      this.handleEnemy(enemy)
      this.setHP(monster.hp);
    }
    if (this.state.playerSPD >= monster.spd && this.state.playerHP >= 1 && this.state.monsterHP >= 1) {
      this.handleEnemy(null)

      let randP = (Math.random() * 100);
      let luckP = this.state.playerLUK * .15;
      let dmgFactorP = randP + luckP;
      let playerPower = (dmgFactorP / 3) * this.state.playerSTR;
      let playerMitigate = this.state.playerDEF * (dmgFactorP / 6);
      let playerRNG = Math.floor(dmgFactorP / 10);

      let randM = (Math.random() * 100);
      let luckM = monster.luk * .15;
      let dmgFactorM = randM + luckM;
      let monsterPower = (dmgFactorM / 3) * monster.str;
      let monsterMitigate = monster.def * (dmgFactorM / 6);
      let monsterRNG = Math.floor(dmgFactorM / 10);

      let playerDamage = Math.floor(playerPower - monsterMitigate);
      if (playerDamage > 0) {
        this.handlePDamage(playerDamage);
      } else {
        playerDamage = 0;
      }

      let attackP = '';
      switch (playerRNG) {
        case 11:
          attackP = `${this.state.playerName} attacks, what LUCK! It's a one shot kill.`;
          this.setHP(0);
          break;
        case 10:
          let crit = playerDamage * .4;
          this.handlePDamage(crit);
          attackP = `${this.state.playerName} attacks for ${playerDamage + crit}, it's a perfect strike! 40% bonus damage!`;
          break;
        case 9:
          attackP = `${this.state.playerName} attacks for ${playerDamage} and it's a MASSIVE blow!`;
          break;
        case 8:
          attackP = `${this.state.playerName} attacks for ${playerDamage} with amazing finesse!`;
          break;
        case 7:
          attackP = `${this.state.playerName} hits for ${playerDamage} with a strong attack!`;
          break;
        case 6:
          attackP = `${this.state.playerName} lands a decent attack for ${playerDamage}!`;
          break;
        case 5:
          attackP = `${this.state.playerName} attacks for ${playerDamage}!`;
          break;
        case 4:
          attackP = `${this.state.playerName} attacks for ${playerDamage}, it's a glancing blow.`;
          break;
        case 3:
          attackP = `${this.state.playerName} attacks for ${playerDamage}, he had no energy in that one.`;
          break;
        case 2:
          attackP = `${this.state.playerName} attacks for ${playerDamage}, he's looking tired out there.`;
          break;
        case 1:
          attackP = `${this.state.playerName} practically misses...${playerDamage} damage done`;
          break;
        case 0:
          attackP = `${this.state.playerName} misses!`;
          break;
        default:
          console.log('error');
          break;
      }
      this.handlePCombat(attackP);

      let monsterDamage = Math.floor(monsterPower - playerMitigate);
      if (monsterDamage > 0) {
        this.handleMDamage(monsterDamage);
      } else {
        monsterDamage = 0;
      }

      let attackM = '';
      switch (monsterRNG) {
        case 11:
          let perf = monsterDamage * .6;
          this.handleMDamage(perf);
          attackM = `${monster.name} attacks with an all out effort for ${monsterDamage + perf}! Ouch.`;
          break;
        case 10:
          let crit = playerDamage * .4;
          this.handleMDamage(crit);
          attackM = `${monster.name} attacks for ${monsterDamage + crit}, it's a perfect strike! 40% bonus damage!`;
          break;
        case 9:
          attackM = `${monster.name} attacks for ${monsterDamage} and it's a MASSIVE blow!`;
          break;
        case 8:
          attackM = `${monster.name} attacks for ${monsterDamage} with amazing finesse!`;
          break;
        case 7:
          attackM = `${monster.name} hits for ${monsterDamage} with a strong attack!`;
          break;
        case 6:
          attackM = `${monster.name} lands a decent attack for ${monsterDamage}!`;
          break;
        case 5:
          attackM = `${monster.name} attacks for ${monsterDamage}!`;
          break;
        case 4:
          attackM = `${monster.name} attacks for ${monsterDamage}, it's a glancing blow.`;
          break;
        case 3:
          attackM = `${monster.name} attacks for ${monsterDamage}, he had no energy in that one.`;
          break;
        case 2:
          attackM = `${monster.name} attacks for ${monsterDamage}, he's looking tired out there.`;
          break;
        case 1:
          attackM = `${monster.name} practically misses...${monsterDamage} damage done`;
          break;
        case 0:
          attackM = `${monster.name} misses!`;
          break;
        default:
          console.log('error');
          break;
      }
      this.handleMCombat(attackM);
      this.handleRound();

    } else if (this.state.monsterHP >= 1 && this.state.playerHP >= 1) {
      this.handleEnemy(null)

      let randP = (Math.random() * 100);
      let luckP = this.state.playerLUK * .15;
      let dmgFactorP = randP + luckP;
      let playerPower = (dmgFactorP / 3) * this.state.playerSTR;
      let playerMitigate = this.state.playerDEF * (dmgFactorP / 6);
      let playerRNG = Math.floor(dmgFactorP / 10);

      let randM = (Math.random() * 100);
      let luckM = monster.luk * .15;
      let dmgFactorM = randM + luckM;
      let monsterPower = (dmgFactorM / 3) * monster.str;
      let monsterMitigate = monster.def * (dmgFactorM / 6);
      let monsterRNG = Math.floor(dmgFactorM / 10);

      let monsterDamage = Math.floor(monsterPower - playerMitigate);
      if (monsterDamage > 0) {
        this.handleMDamage(monsterDamage);
      } else {
        monsterDamage = 0;
      }

      let attackM = '';
      switch (monsterRNG) {
        case 11:
          let perf = monsterDamage * .6;
          this.handleMDamage(perf);
          attackM = `${monster.name} attacks with an all out effort for ${monsterDamage + perf}! Ouch.`;
          break;
        case 10:
          let crit = monsterDamage * .4;
          this.handleMDamage(crit);
          attackM = `${monster.name} attacks for ${monsterDamage + crit}, it's a perfect strike! 40% bonus damage!`;
          break;
        case 9:
          attackM = `${monster.name} attacks for ${monsterDamage} and it's a MASSIVE blow!`;
          break;
        case 8:
          attackM = `${monster.name} attacks for ${monsterDamage} with amazing finesse!`;
          break;
        case 7:
          attackM = `${monster.name} hits for ${monsterDamage} with a strong attack!`;
          break;
        case 6:
          attackM = `${monster.name} lands a decent attack for ${monsterDamage}!`;
          break;
        case 5:
          attackM = `${monster.name} attacks for ${monsterDamage}!`;
          break;
        case 4:
          attackM = `${monster.name} attacks for ${monsterDamage}, it's a glancing blow.`;
          break;
        case 3:
          attackM = `${monster.name} attacks for ${monsterDamage}, he had no energy in that one.`;
          break;
        case 2:
          attackM = `${monster.name} attacks for ${monsterDamage}, he's looking tired out there.`;
          break;
        case 1:
          attackM = `${monster.name} practically misses...${monsterDamage} damage done`;
          break;
        case 0:
          attackM = `${monster.name} misses!`;
          break;
        default:
          console.log('error');
          break;
      }
      this.handleMCombat(attackM);

      let playerDamage = Math.floor(playerPower - monsterMitigate);

      if (playerDamage > 0) {
        this.handlePDamage(playerDamage);
      } else {
        playerDamage = 0;
      }

      // console.log(playerDamage);

      let attackP = '';
      switch (playerRNG) {
        case 11:
          attackP = `${this.state.playerName} attacks, what LUCK! It's a one shot kill.`;
          this.setHP(0);
          break;
        case 10:
          let crit = playerDamage * .4;
          this.handlePDamage(crit);
          attackP = `${this.state.playerName} attacks for ${playerDamage + crit}, it's a perfect strike! 40% bonus damage!`;
          break;
        case 9:
          attackP = `${this.state.playerName} attacks for ${playerDamage} and it's a MASSIVE blow!`;
          break;
        case 8:
          attackP = `${this.state.playerName} attacks for ${playerDamage} with amazing finesse!`;
          break;
        case 7:
          attackP = `${this.state.playerName} hits for ${playerDamage} with a strong attack!`;
          break;
        case 6:
          attackP = `${this.state.playerName} lands a decent attack for ${playerDamage}!`;
          break;
        case 5:
          attackP = `${this.state.playerName} attacks for ${playerDamage}!`;
          break;
        case 4:
          attackP = `${this.state.playerName} attacks for ${playerDamage}, it's a glancing blow.`;
          break;
        case 3:
          attackP = `${this.state.playerName} attacks for ${playerDamage}, he had no energy in that one.`;
          break;
        case 2:
          attackP = `${this.state.playerName} attacks for ${playerDamage}, he's looking tired out there.`;
          break;
        case 1:
          attackP = `${this.state.playerName} practically misses...${playerDamage} damage done`;
          break;
        case 0:
          attackP = `${this.state.playerName} misses!`;
          break;
        default:
          console.log('error');
          break;
      }

      this.handlePCombat(attackP);

      this.handleRound();

    } else if (this.state.playerHP <= 0) {
      const winner = `Oh noes, you have died in battle, ${this.state.playerName}.`;
      // console.log(winner);
      this.handleWinner(winner);
      this.setHP(undefined);
      console.log("disable other stuff, send back to town");
    } else if (this.state.monsterHP <= 0) {
      const winner = `You have defeated ${monster.name}, he dropped ${monster.goldGiven} gold. You are awarded ${monster.expGiven} EXP!`;
      this.handleKill();
      this.handleDrops(monster.goldGiven, monster.expGiven);
      this.handleWinner(winner);
      this.setHP(undefined);
    }
    console.log(this.state.playerGold);
    console.log(this.state.playerEXP);
  };

  render() {
    return (
      <div className="Battle">

      <button onClick={() => {this.handleFight(this.state.monster[this.state.defeated])}}>Fight</button>

      <Fight
        round={this.state.round}
        pHP={this.state.playerHP}
        mHP={this.state.monsterHP}
        pDmg={this.state.playerAttack}
        mDmg={this.state.monsterAttack}
        win={this.state.winner}
        monster={this.state.monster}
        pName={this.state.playerName}
        killed={this.state.defeated}
        enemy={this.state.enemy}
      />

      </div>
    );
  };

};
export default Battle;
