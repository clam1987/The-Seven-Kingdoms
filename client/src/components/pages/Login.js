import React, { Component } from "react";
import Button from "../Button";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Login.css";

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
      <div className="jumbotron" style={{backgroundColor: "#1b0d0b"}}>
    
          <h1 className="displayLogin">Winter is Coming</h1>
          <img src="https://i.imgur.com/u3V51nO.jpg" alt="home" className="responsive"></img>

      <div className="Login">
        {/* <h2 className="loginOne">LOGIN</h2> */}
        <input type="text" value={this.state.email} onChange={this.handleChange}
        name="email" placeholder="Email"/>
        <input type="password" value={this.state.password} onChange={this.handleChange}
        name="password" placeholder="Password"/>
       
                <small className="form-text text-muted">Login with your email and password</small>

        <Button disabled={this.formInvalid()} callback={this.handleSubmit} name="Login" />
        <h1 className="ribbon">
   <strong class="ribbon-content">No account yet? Click below to signup!</strong>
</h1>
      {/* <h3 className="loginTwo">No account yet? Click below to signup!</h3> */}
<Link to="/signup"><Button name="Create Account"/></Link>

      </div>
      </div>
      
    )
  }
}

export default Login;
