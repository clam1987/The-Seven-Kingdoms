import React, { Component } from "react";
import Button from "../Button";
import axios from 'axios';

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
      //fill with login stuff added button as placeholder
      <div className="Login">
        <h2>This is where you login</h2>
        <input type="text" value={this.state.email} onChange={this.handleChange}
        name="email" placeholder="email"/>
        <input type="text" value={this.state.password} onChange={this.handleChange}
        name="password" placeholder="password"/>
        <Button disabled={this.formInvalid()} callback={this.handleSubmit} name="Login" style={"round-button-circle"}/>
      </div>
    )
  }
}

export default Login;
