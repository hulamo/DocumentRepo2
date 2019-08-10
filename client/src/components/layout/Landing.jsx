import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import logo from "./DocumentRepoLogo.jpg";
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
            <MDBCol top md="6" style={{ backgroundColor: "#f5f3f3" }}>
              <MDBRow middle>
                <MDBCol md="12">
                  <img className="img4" src={logo} alt="Logo" />
                </MDBCol>
              </MDBRow>

              <MDBRow middle>
                <MDBCol md="12">
                  <div style={{ fontSize: "44px" }}>
                    <strong>If You need to organize and share documents</strong>
                  </div>
                </MDBCol>
              </MDBRow>
              <br />

              <MDBRow>
                <MDBCol md="12">
                  <i
                    className="fas fa-user-friends"
                    style={{ fontSize: "34px", color: "green" }}
                  />
                  <strong style={{ fontSize: "28px", color: "black" }}>
                    &nbsp; With your friends
                  </strong>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <i
                    className="fas fa-user-cog"
                    style={{ fontSize: "34px", color: "green" }}
                  />
                  <strong style={{ fontSize: "28px", color: "black" }}>
                    &nbsp;With your team
                  </strong>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <i
                    className="fas fa-user"
                    style={{ fontSize: "34px", color: "green" }}
                  />
                  <strong style={{ fontSize: "28px", color: "black" }}>
                    &nbsp;With everyone
                  </strong>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <i
                    className="fas fa-user-lock"
                    style={{ fontSize: "34px", color: "green" }}
                  />
                  <strong style={{ fontSize: "28px", color: "black" }}>
                    &nbsp;Or keep them private
                  </strong>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow>
                <MDBCol md="12">
                  <div style={{ fontSize: "44px" }}>
                    You are in the right place...
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="d-sm-block text-center" md="6" middle>
              <MDBRow>
                <MDBCol md="12">
                  <br />
                </MDBCol>
              </MDBRow>
              <MDBRow middle>
                <MDBCol md="6">
                  <strong style={{ fontSize: "40px", color: "green" }}>
                    <img className="img3" src={logo} alt="Logo" />
                  </strong>
                </MDBCol>
                <MDBCol md="6">
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
              <MDBRow middle>
                <MDBCol md="12">
                  <strong style={{ fontSize: "34px" }}>
                    Discover the best way to share your documents
                  </strong>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <br />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBBtn
                    rounded
                    onClick={this.setRedirectr}
                    size="lg"
                    active
                    color="success"
                  >
                    Register
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <br />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="12">
                  <MDBBtn
                    rounded
                    onClick={this.setRedirectl}
                    size="lg"
                    active
                    color="green"
                  >
                    &nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;
                  </MDBBtn>
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
