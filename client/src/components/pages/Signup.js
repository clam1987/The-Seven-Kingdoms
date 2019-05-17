import React, { Component } from "react";
import Button from "../Button";
import axios from 'axios';
import { Link } from "react-router-dom";


class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }

  handleSubmit = () => {
    axios.post('/users/signup', this.state).then(users => {
      console.log(users);
    }).catch(err => {
      if (err) throw err;
    })
  }

  handleChange = ({target: {value, name}}) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  formInvalid = () => !(this.state.password && this.state.password2 && this.state.email && this.state.name);


  render() {
    return (
      //STYLE IT UP
      <div className="Signup">
        <h2>Create an account and Name your character!</h2>
        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Character Name" />
        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" />
        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
        <input type="password" value={this.state.password2} onChange={this.handleChange} name="password2" placeholder="Re-enter password" />
        <Button disabled={this.formInvalid()} callback={this.handleSubmit} name="Signup" />
      </div>
    )
  }
}

export default Signup;
