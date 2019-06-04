import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Footer extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


render() {
  const { user } = this.props.auth;
  return (
    <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large btn-outline-warning"
            >
              Logout
            </button>
  );

  }
}

// function Footer(props){
//     return (
//       //fill with Footer stuff added button as placeholder
//       <div className="Footer">
//         {/* <h2>This is a footer</h2> */}
//         {/* <Button name={"Logout"} style={"round-button-circle"}/> */}
//       </div>

     
//     )
// }

Footer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Footer);
