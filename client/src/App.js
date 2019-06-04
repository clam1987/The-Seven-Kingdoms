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
    user: null
  }


  setUserData = (user, cb) => {
    this.setState({ user }, cb)
    console.log(user);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" render= {(props) => this.state.user ? <Character {...props} /> : <Login {...props} setUserData={this.setUserData} />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/character" component={Character} />
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
