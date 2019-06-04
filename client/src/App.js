// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions.js";

// Import Redux
import { Provider } from "react-redux";
import store from "./store";

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

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}


class App extends Component {
  // state = {
  //   isLoggedIn: false,
  //   user: null
  // }


  // setUserData = (user, cb) => {
  //   this.setState({ user }, cb)
  //   console.log(user);
  // }

  render() {
    return (
      
      <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          {/* <Route exact path="/" render= {(props) => this.state.user ? <Character {...props} /> : <Login {...props} setUserData={this.setUserData} />} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Switch>
          <PrivateRoute exact path="/battle" component={Battle} />
          <PrivateRoute exact path="/inventory" component={Inventory} />
          <PrivateRoute exact path="/character" component={Character} />
          <PrivateRoute exact path="/town" component={Town} />
          <PrivateRoute exact path="/quest" component={Quest} />
          <PrivateRoute exact path="/shop" component={Shop} />
          <PrivateRoute exact path="/stats" component={Stats} />
          <PrivateRoute exact path="/enter" component={Enter} />
          </Switch>
          <Footer />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
