import React, { Component } from "react";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./burger.css";
import logo from "./DocumentRepoBanner.jpg";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

var mostrar = true;
// <img src={logo} alt="Logo" height="44" className="img4" />
class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  // "d-none d-md-block"
  render() {
    const { user } = this.props.auth;

    if (user.id) {
      mostrar = true;
      console.log("Mostrar" + mostrar);
    } else {
      mostrar = false;
      console.log("No Mostrar" + mostrar);
    }

    return (
      <div className="">
        <MDBNavbar
          className="customC"
          color="green darken-4"
          dark
          expand="md"
          fixed="top"
        >
          <MDBNavbarBrand>
            <MDBNavLink to="/">
              <img src={logo} alt="Logo" className="img5" />
            </MDBNavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse11" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                {mostrar && (
                  <MDBNavLink className="arialf" to="/folders">
                    Folders
                  </MDBNavLink>
                )}
              </MDBNavItem>
              <MDBNavItem>
                {mostrar && (
                  <MDBNavLink className="arialf" to="/files">
                    Files
                  </MDBNavLink>
                )}
              </MDBNavItem>
              <MDBNavItem>
                {mostrar && (
                  <MDBNavLink className="arialf" to="/contacts">
                    Contacts
                  </MDBNavLink>
                )}
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                {!mostrar && (
                  <MDBNavLink className="arialf" to="/plans">
                    Pricing Plans
                  </MDBNavLink>
                )}
              </MDBNavItem>
              <MDBNavItem>
                {!mostrar && (
                  <MDBNavLink className="arialf" to="/register">
                    Register
                  </MDBNavLink>
                )}
              </MDBNavItem>
              <MDBNavItem>
                {!mostrar && (
                  <MDBNavLink className="arialf" to="/login">
                    Login
                  </MDBNavLink>
                )}
              </MDBNavItem>
              <MDBNavItem>
                {mostrar && (
                  <MDBNavLink className="arialf" to="/contacts">
                    Account
                  </MDBNavLink>
                )}
              </MDBNavItem>
              <MDBNavItem>
                {mostrar && (
                  <MDBNavLink
                    className="arialf"
                    to="#"
                    onClick={this.onLogoutClick}
                  >
                    Logout
                  </MDBNavLink>
                )}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
