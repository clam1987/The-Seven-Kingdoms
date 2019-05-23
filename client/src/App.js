import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
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
import PrivateRoute from "./components/pages/PrivateRoute/PrivateRoute"

import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Switch />
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/battle" loggedIn={this.state.loggedIn} component={Battle} />
          <PrivateRoute path="/character" loggedIn={this.state.loggedIn} component={Character} />
          <PrivateRoute path="/inventory" loggedIn={this.state.loggedIn} component={Inventory} />
          <PrivateRoute path="/town" loggedIn={this.state.loggedIn} component={Town} />
          <PrivateRoute path="/quest" loggedIn={this.state.loggedIn} component={Quest} />
          <PrivateRoute path="/shop" loggedIn={this.state.loggedIn} component={Shop} />
          <PrivateRoute path="/stats" loggedIn={this.state.loggedIn} component={Stats} />
          <PrivateRoute path="/enter" loggedIn={this.state.loggedIn} component={Enter} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
