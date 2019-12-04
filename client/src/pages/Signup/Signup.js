import React, { Component } from "react";
// import Button from "../../components/Button/Button";
// import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./Signup.css";
// import { expression } from "@babel/template";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";


class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/town");
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const config = {header: {"content-type": "application/x-www-form-urlencoded"}};

  //   axios.post('/users/signup', this.state, config).then(function(res) {
  //       console.log(res.data);
  //       console.log(res);
  //     }).catch(err => {
  //     if (err) throw err;
  //   })
  // }


  // handleChange = ({ target: { value, name } }) => {
  //   this.setState({ [name]: value }, () => console.log(this.state));
  // }

  formInvalid = () => !(this.state.password && this.state.password2 && this.state.email && this.state.name);


  render() {
    const { errors } = this.state;
    return (
      //STYLE IT UP
      <div className="jumbotron" style={{ backgroundColor: "#1b0d0b" }}>
        <h1 className="displayLogin">Winter is Coming</h1>
        <img src="https://www.dailydot.com/wp-content/uploads/2ca/4e/fa303666dcd14120.gif" alt="home2" className="responsiveVh"></img>

        <div className="Signup">
        <h1 className="ribbon">
   <strong class="ribbon-content">Create an account and Name your character!</strong>
</h1>
          {/* <h2 className="create">Create an account and Name your character!</h2> */}



          {/* <form onSubmit= {this.handleSubmit}className="form">
            <div className="form-group">
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Character Name" />
              <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
              <input type="password" value={this.state.password2} onChange={this.handleChange} name="password2" placeholder="Re-enter password" />
            </div>
            <button type="submit" className="btn btn-warning">Sign Up</button>
            </form> */}


<form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                  style={{ position: "relative", right: "-28px"}}
                />
                <label htmlFor="name" style={{ position: "relative", right: "-28px"}}>Name</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                  style={{ position: "relative", right: "-25px"}}
                />
                <label htmlFor="email"  style={{ position: "relative", right: "-26px"}}>Email</label>
                <span className="red-text">{errors.email}</span>
              </div>

              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                  style={{ position: "relative", right: "-54px"}}
                />
                <label htmlFor="password"  style={{ position: "relative", right: "-54px"}}>Password</label>
                <span className="red-text">{errors.password}</span>
              </div>

              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                  style={{ position: "relative", right: "-111px"}}
                />
                <label htmlFor="password2" style={{ position: "relative", right: "-112px"}}>Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large btn-outline-warning"
                >
                  Sign Up
                </button>
              </div>
            </form>
            {/* <Button disabled={this.formInvalid()} callback={this.handleSubmit} name="Signup" /> */}
          </div>
        </div>

    )
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));