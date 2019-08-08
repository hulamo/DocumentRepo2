import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBFormInline,
  MDBBtn
} from "mdbreact";

var mostrar = true;

class Navbar2 extends Component {
  constuctor() {
    this.NewFolder2 = this.NewFolder2.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    misFolders: []
  };

  NewFolder2 = () => {
    console.log("Redirect");
    this.props.history.push("/newfolder");
    //return <Redirect to="/newfolder" />;
  };

  /*
<MDBNavItem>
            <MDBBtn color="grey" onClick={this.NewFolder2}>
              + Nueva Carpeta
            </MDBBtn>
          </MDBNavItem>
*/

  render() {
    // var navbarStyle = {
    //   marginTop: 64
    // };

    const { user } = this.props.auth;
    console.log("USER.ID" + user.id);
    if (user.id) {
      mostrar = true;
      console.log("Mostrar" + mostrar);
    } else {
      mostrar = false;
      console.log("No Mostrar" + mostrar);
    }

    // style={navbarStyle}
    if (mostrar == true) {
      return (
        <div>
          <MDBNavbar
            className="fixed-top-2"
            fixed="top"
            color="green darken-3"
            dark
            expand="md"
          >
            <MDBNavbarBrand>
              <strong className="white-text">{user.name}</strong>
            </MDBNavbarBrand>

            <MDBNavbarNav left />

            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Add</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link to="/newfolder">New Folder</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link to="/newfile">New File</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link to="/">New Link</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link to="/newfriend">New Contact</Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

Navbar2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar2)
);
