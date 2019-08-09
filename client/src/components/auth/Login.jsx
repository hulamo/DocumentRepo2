import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";

import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from "mdbreact";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    //this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/folders");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/folders");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("userData" + userData);
    this.props.loginUser(userData);
  };

  render() {
    //    const { errors } = this.state;

    return (
      <MDBContainer>
        <form noValidate onSubmit={this.onSubmit}>
          <MDBRow className="justify-content-md-center">
            <MDBCol md="5">
              <MDBCard>
                <MDBCardBody>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      onChange={this.onChange}
                      value={this.state.email}
                      id="email"
                      type="email"
                      label="Type your email"
                      icon="envelope"
                      group
                      validate
                      error="wrong"
                      success="right"
                    />

                    <MDBInput
                      onChange={this.onChange}
                      value={this.state.password}
                      id="password"
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                  <p className=" text-center grey-text text-darken-1">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                  <div className="text-center">
                    <MDBBtn type="submit">Login</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  // errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
