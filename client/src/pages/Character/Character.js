import React, { Component } from "react";
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom";
import "./Character.css";
import stats from "../../data/player";
import axios from "axios";


class Character extends Component {
  state = {
    name: "",
    hp: 1,
    str: 1,
    def: 1,
    spd: 1,
    lck: 1,
    gold: 1,
    user: ""
  }

  handleSubmit = () => {
    axios
      .post("/users/login/character", this.state)
      .then(res => {
        console.log(res)
      .catch(err => {
        if (err) throw err;
      });
  })
};

  render() {
    return (
      //fill with Character stuff added button as placeholder
      <div className="Character">
      <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
          <h1 className="displayCharInv">Create Your Character</h1>
        <h2 className="quote">Never forget what you are. The rest of the world will not. <br />
         Wear it like armor, and it can never be used to hurt you." </h2>
          </div>

<div className="container">
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/daily/vulture/2017/08/28/thrones.w700.h700.jpg" alt="Jane" style={{width: "100%"}}/>
      <div className="container">
        <h2 className="charName">Jon Snow</h2>
        <p className="title">Lord of Winterfell</p>
        <p>
        <ul className="listChar">
                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul>
        </p>
        <p><Link to="/enter"><Button name="Select Character" callback={this.handleSubmit}/></Link>
</p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg" alt="Mike" style={{width: "100%"}}/>
      <div className="container" >
        <h2 className="charName">Arya Stark</h2>
        <p className="title">"No One"</p>
        <p>
          <ul className="listChar">
                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p><Link to="/enter"><Button name="Select Character"/></Link>
</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/fashion/daily/2019/04/15/15-daenerys-got.w700.h700.jpg" alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2 className="charName">Daenerys Targaryen</h2>
        <p className="title">Mother of Dragons</p>
        <p>
        <ul className="listChar">

                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p><Link to="/enter"><Button name="Select Character"/></Link>
</p>
      </div>
    </div>
  </div>
  </div>
  <div className="row">
  <div className="column">
    <div className="card">
      <img src="https://akns-images.eonline.com/eol_images/Entire_Site/201948/rs_600x600-190508112514-600-game-of-thrones-ep-5-ch-050819.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90" alt="Jane" style={{width: "100%"}}/>
      <div className="container">
        <h2 className="charName">Cersei Lannister</h2>
        <p className="title">Queen of Seven Kingdoms</p>
        <p>
        <ul className="listChar">

                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p><Link to="/enter"><Button name="Select Character"/></Link>
</p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
      <img src="http://cdn.shopify.com/s/files/1/1368/0279/products/The_Hound_1024x1024.jpg" alt="Mike" style={{width: "100%"}}/>
      <div className="container" >
        <h2 className="charName">Sandor Clegane</h2>
        <p className="title">The Hound</p>
        <p>
        <ul className="listChar">

                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p><Link to="/enter"><Button name="Select Character"/></Link>
</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/daily/vulture/2019/04/12/game-of-thrones-season-8/game-of-thrones-16.w700.h700.jpg" alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2 className="charName">Bran Stark</h2>
        <p className="title">Three-eyed Raven</p>
        <p>
        <ul className="listChar">

                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p>
        <Link to="/enter"><Button name="Select Character"/></Link>
       </p>
      </div>
    </div>
  </div>
  </div>
  <div className="row">
  <div className="column">
    <div className="card">
      <img src="https://askopinion.com/images/Files/EditorImages/ygritte-game-of-thrones-quote-snr.jpg" alt="Jane" style={{width: "100%"}}/>
      <div className="container">
        <h2 className="charName">Ygritte</h2>
        <p className="title">The Wildling</p>
        <p>
        <ul className="listChar">

                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p><Link to="/enter"><Button name="Select Character"/></Link>
</p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
      <img src="https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2019/05/20/Game-of-Thrones-Season-8-Ep-6-Finale-%286%29.png?itok=bhvqIOr-" alt="Mike" style={{width: "100%"}}/>
      <div className="container" >
        <h2 className="charName">Drogon</h2>
        <p className="title">The Dragon</p>
        <p>
        <ul className="listChar">

                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p><Link to="/enter"><Button name="Select Character"/></Link>
</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="https://pixel.nymag.com/imgs/fashion/daily/2016/05/23/23-jorah.w700.h700.jpg" alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2 className="charName">Jorah Mormont</h2>
        <p className="title">Jorah the Andal</p>
        <p>
        <ul className="listChar">

                <li>Level: 10</li>
                <li>HP: 100</li>
                <li>Strength: 100</li>
                <li>Defense: 100</li>
                <li>Speed: 100</li>
                <li>Gold: 10000</li>
                <li>Experience: 50</li>
                <li>Experience to Next Level: 20</li>
            </ul></p>
        <p><Link to="/enter"><Button name="Select Character"/></Link>
</p>
      </div>
    </div>
  </div>
  </div>
  </div>











          {/* <div className="container">

          <div className="row">
    <div className="col">
          <img src="https://i.imgur.com/c2oDdpm.jpg" alt="home" className="responsive" id="grey"></img>
</div>
    <div className="col">
</div>
      </div>
      </div> */}
      {/* <div className="container" id="buttonBox">
        <Link to="/enter"><Button name="Create Character"/></Link>
      </div>  */}
      </div>
    )
  }
}

export default Character;
