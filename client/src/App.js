import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Battle from "./components/pages/Battle/Battle";
import Character from "./components/pages/Character/Character";
import Inventory from "./components/pages/Inventory/Inventory";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import Quest from "./components/pages/Quest/Quest";
import Shop from "./components/pages/Shop/Shop";
import Stats from "./components/pages/Stats/Stats";
import Town from "./components/pages/Town/Town";
import Enter from "./components/pages/Enter/Enter";

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/character" component={Character} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/town" component={Town} />
          <Route exact path="/quest" component={Quest} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/enter" component={Enter} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
