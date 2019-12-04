import React, { Component } from "react";
import Button from "../../components/Button/Button";
// import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Login.css";
import { relative } from "path";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/town");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/character"); // push user to character when they login
    } 
    else if (nextProps.auth.isAuthenticated && nextProps.auth.hasCharacter) {
      this.props.history.push("/town"); // push user to town if they are logged in and have a character.
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  // Old Auth Submit
  // handleSubmit = () => {
  //   axios
  //     .post("/users/login", this.state)
  //     .then(result => {
  //       console.log(result);
  //       if (result.status === 200){
  //         this.props.setUserData(result.data, () => {
  //           console.log(this.props)
  //           return this.props.history.push("/protected/character")
  //         })
  //       } else {
  //         console.log('ah shit here we go again')
  //       }
  //     })
  //     .catch(err => {
  //       if (err) throw err;
  //     });
  // };

  // isLoggedIn = (req, res, next) => {
  //   console.log("yes");
  //   if (req.session.user !== undefined) {
  //     next();
  //   } else {
  //     res.redirect("/login");
  //   }
  // }
  // Old Handle Change
  // handleChange = ({ target: { value, name } }) => {
  //   this.setState({ [name]: value })
  // };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };


  formInvalid = () => !(this.state.password && this.state.email);

  render() {
       const { errors } = this.state;
    return (
      //STYLE IT UP!
      <div className="jumbotron" style={{ backgroundColor: "#1b0d0b" }}>
        <h1 className="displayLogin">Winter is Coming</h1>
        <img
          src="https://i.imgur.com/u3V51nO.jpg"
          alt="home"
          className="responsiveVh"
        />

<form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="form-group">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                  style={{ position: "relative", right: "-28px"}}
                />
                <label htmlFor="password"  style={{ position: "relative", right: "-28px"}}>Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <div>
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
                  Log In
                </button>
                </div>
              </div>
            </form>

        {/* <div className="Login"> */}
          {/* <h2 className="loginOne">LOGIN</h2> */}
          {/* <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
          />

          <small className="form-text text-muted">
            Login with your email and password
          </small>

          <Button
            disabled={this.formInvalid()}
            callback={this.handleSubmit}
            name="Login"
          /> */}
          <h1 className="ribbon">
            <strong class="ribbon-content">
              No account yet? Click below to signup!
            </strong>
          </h1>
          <h3 className="loginTwo">No account yet? Click below to signup!</h3>
          <Link to="/signup">
            <Button name="Create Account" />
           </Link>
        </div>
      // </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);