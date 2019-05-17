import React, { Component } from "react";
import Button from "../Button";
import axios from 'axios';
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = () => {
    axios.post('/users/login', this.state).then(users => {
      console.log(users);
    }).catch(err => {
      if (err) throw err;
    })
  }

  handleChange = ({target: {value, name}}) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  formInvalid = () => !(this.state.password && this.state.email);

  render() {
    return (
      //STYLE IT UP!
      <div className="Login">
        <h2>Login with your email and password!</h2>
        <h3>No account yet? Click below to signup!</h3>
        <Link to="/signup"><Button name="Create Account"/></Link>
        <input type="text" value={this.state.email} onChange={this.handleChange}
        name="email" placeholder="Email"/>
        <input type="password" value={this.state.password} onChange={this.handleChange}
        name="password" placeholder="Password"/>
        <Button disabled={this.formInvalid()} callback={this.handleSubmit} name="Login" />
      </div>
    )
  }
}

export default Login;
