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

        {/*  <Switch>
    <Route exact path="/" render= {(props) => this.state.user ? <Character {...props} /> : <Login {...props} setUserData={this.setUserData} />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/protected/character" render={(props) => this.state.user ? <Character {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/battle" render={(props) => this.state.user ? <Battle {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/inventory" render={(props) => this.state.user ? <Inventory {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/character" render={(props) => this.state.user ? <Character {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/town" render={(props) => this.state.user ? <Town {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/quest" render={(props) => this.state.user ? <Quest {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/shop" render={(props) => this.state.user ? <Shop {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/stats" render={(props) => this.state.user ? <Stats {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          <Route exact path="/protected/enter" render={(props) => this.state.user ? <Enter {...props}/> : <Login {...props} setUserData={this.setUserData}/> }/>
          </Switch> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
