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
          <Switch>
          <Route exact path="/" render={props => <Login {...props} setUserData={this.setUserData}/>} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/protected/character" render={(props) => this.state.user ? <Character {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/battle" render={(props) => this.state.user ? <Battle {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/inventory" render={(props) => this.state.user ? <Inventory {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>          <Route exact path="/protected/character" render={(props) => this.state.user ? <Character {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/town" render={(props) => this.state.user ? <Town {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/quest" render={(props) => this.state.user ? <Quest {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/shop" render={(props) => this.state.user ? <Shop {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/stats" render={(props) => this.state.user ? <Stats {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/enter" render={(props) => this.state.user ? <Enter {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          </Switch>  

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
