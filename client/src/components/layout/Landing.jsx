import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBNavLink,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

import logo from "./logoDR.jpg";
import "./burger.css";
/*
<img
              src={process.env.PUBLIC_URL + "documentrepo.jpg"}
              className="img-fluid mx-auto"
              alt="aligment"
            />
*/

/*
<MDBRow>
          <MDBCol md="6" className="mx-auto">
            <img
              src={process.env.PUBLIC_URL + "documentrepo.jpg"}
              className="img-fluid mx-auto"
              alt="aligment"
            />
          </MDBCol>
        </MDBRow>
*/

class Landing extends Component {
  state = {
    redirect: false,
    linkk: "/"
  };
  setRedirectl = () => {
    this.setState({
      redirect: true,
      linkk: "/login"
    });
  };

  setRedirectr = () => {
    this.setState({
      redirect: true,
      linkk: "/register"
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.linkk} />;
    }
  };

  onClickd = e => {
    e.preventDefault();
    // return <Redirect to="/login" />;
    window.location.href = "/login";
  };

  onClickr = e => {
    e.preventDefault();
    window.location.href = "/register";
    //return <Redirect to="/login" />;
  };

  render() {
    this.onClickr = e => {
      e.preventDefault();
      //window.location.href = "/register";
      return <Redirect to="/login" />;
    };

    return (
      <div>
        {this.renderRedirect()}
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol
              className="text-center escondegrande"
              md="6"
              size="12"
              middle
            >
              <MDBRow middle>
                <MDBCol md="6" className="d-sm-block text-center">
                  <br />
                </MDBCol>

                <MDBCol md="6" />
              </MDBRow>
              <MDBRow middle>
                <MDBCol md="12">
                  <MDBBtn
                    rounded
                    onClick={this.setRedirectl}
                    size="lg"
                    active
                    color="green"
                  >
                    Login
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <br />
                </MDBCol>
              </MDBRow>
              <MDBRow middle center>
                <MDBCol md="12" middle>
                  <strong className="arialf" style={{ fontSize: "34px" }}>
                    Discover the best way to share your documents
                  </strong>
                </MDBCol>
              </MDBRow>
              <MDBRow middle center>
                <MDBCol size="1" />
                <MDBCol
                  size="10"
                  className="d-sm-block text-center"
                  middle
                  center
                >
                  <MDBInput
                    style={{
                      border: "2px solid",
                      borderRadius: "4px",
                      width: "100%"
                    }}
                    type="email"
                    label="Your Email"
                    size="lg"
                    outline
                  />
                </MDBCol>
                <MDBCol size="1" />
              </MDBRow>
              <MDBRow middle center>
                <MDBCol lg="4" middle>
                  <MDBBtn
                    rounded
                    onClick={this.setRedirectr}
                    size="lg"
                    active
                    color="success"
                  >
                    Try it Free
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow middle center>
                <MDBCol md="12" middle>
                  <strong className="arialf" style={{ fontSize: "24px" }}>
                    If you are already a user &nbsp;
                    <Link to="/login">Login</Link>
                  </strong>
                </MDBCol>
                <MDBCol md="6" className="d-sm-block text-center">
                  <br />
                  <br />
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol md="6">
              <MDBRow middle>
                <MDBCol md="12">
                  <div className="arialf" style={{ fontSize: "44px" }}>
                    <strong>If You need to organize and share documents</strong>
                  </div>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow>
                <div clasName>
                  <MDBCol md="12">
                    <MDBListGroup>
                      <MDBListGroupItem className="borderless">
                        <MDBIcon
                          className="green-text pr-3"
                          size="2x"
                          icon="user-friends"
                          fixed
                        />
                        <strong
                          className="arialf"
                          style={{ fontSize: "28px", color: "black" }}
                        >
                          &nbsp;&nbsp;With friends
                        </strong>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="borderless">
                        <MDBIcon
                          className="green-text pr-3"
                          size="2x"
                          icon="users-cog"
                          fixed
                        />
                        <strong
                          className="arialf"
                          style={{ fontSize: "28px", color: "black" }}
                        >
                          &nbsp;&nbsp;With Your Team
                        </strong>
                      </MDBListGroupItem>

                      <MDBListGroupItem className="borderless">
                        <MDBIcon
                          className="green-text pr-3"
                          size="2x"
                          icon="users"
                          fixed
                        />
                        <strong
                          className="arialf"
                          style={{ fontSize: "28px", color: "black" }}
                        >
                          &nbsp;&nbsp;With Everyone
                        </strong>
                      </MDBListGroupItem>

                      <MDBListGroupItem className="borderless">
                        <MDBIcon
                          className="green-text pr-3"
                          size="2x"
                          icon="user-lock"
                          fixed
                        />
                        <strong
                          className="arialf"
                          style={{ fontSize: "28px", color: "black" }}
                        >
                          &nbsp;&nbsp;Or Keep them Private
                        </strong>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCol>
                </div>
              </MDBRow>

              <br />
              <MDBRow>
                <MDBCol md="12">
                  <div className="arialf" style={{ fontSize: "44px" }}>
                    You are in the right place...
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol
              className="text-center escondechico"
              md="6"
              size="12"
              middle
            >
              <MDBRow>
                <MDBCol md="12" className="d-sm-block text-center">
                  <div className="img3">
                    <strong style={{ fontSize: "40px", color: "green" }}>
                      <img style={{ height: "100px" }} src={logo} alt="Logo" />
                    </strong>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow middle>
                <MDBCol md="6" className="d-sm-block text-center">
                  <br />
                </MDBCol>

                <MDBCol md="6" />
              </MDBRow>
              <MDBRow middle>
                <MDBCol md="12">
                  <MDBBtn
                    rounded
                    onClick={this.setRedirectl}
                    size="lg"
                    active
                    color="green"
                  >
                    Login
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <br />
                </MDBCol>
              </MDBRow>
              <MDBRow middle center>
                <MDBCol md="12" middle>
                  <strong className="arialf" style={{ fontSize: "34px" }}>
                    Discover the best way to share your documents
                  </strong>
                </MDBCol>
              </MDBRow>
              <MDBRow middle center>
                <MDBCol lg="6" middle>
                  <MDBInput
                    style={{
                      border: "2px solid",
                      borderRadius: "4px",
                      width: "100%"
                    }}
                    type="email"
                    label="Your Email"
                    size="lg"
                    outline
                  />
                </MDBCol>
                <MDBCol lg="4" middle>
                  <MDBBtn
                    rounded
                    onClick={this.setRedirectr}
                    size="lg"
                    active
                    color="success"
                  >
                    Try it Free
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow middle center>
                <MDBCol md="12" middle>
                  <strong className="arialf" style={{ fontSize: "24px" }}>
                    If you are already a user &nbsp;
                    <Link to="/login">Login</Link>
                  </strong>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
/*
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>TeamPencil</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Organiza, administra y comparte tu trabajo.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
*/
export default Landing;
