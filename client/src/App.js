import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Battle from "./pages/Battle/Battle";
import Character from "./pages/Character/Character";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Quest from "./pages/Quest/Quest";
import Shop from "./pages/Shop/Shop";
import Stats from "./pages/Stats/Stats";
import Town from "./pages/Town/Town";
import Enter from "./pages/Enter/Enter";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute"

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
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/character" component={Character} />
          <Route exact path="/enter" component={Enter} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/quest" component={Quest} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/town" component={Town} />

          {/*<Switch />
          <PrivateRoute path="/battle" loggedIn={this.state.loggedIn} component={Battle} />
          <PrivateRoute path="/character" loggedIn={this.state.loggedIn} component={Character} />
          <PrivateRoute path="/inventory" loggedIn={this.state.loggedIn} component={Inventory} />
          <PrivateRoute path="/town" loggedIn={this.state.loggedIn} component={Town} />
          <PrivateRoute path="/quest" loggedIn={this.state.loggedIn} component={Quest} />
          <PrivateRoute path="/shop" loggedIn={this.state.loggedIn} component={Shop} />
          <PrivateRoute path="/stats" loggedIn={this.state.loggedIn} component={Stats} />
          <PrivateRoute path="/enter" loggedIn={this.state.loggedIn} component={Enter} />*/}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
