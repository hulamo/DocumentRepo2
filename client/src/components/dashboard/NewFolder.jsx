import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newFolder } from "../../actions/authActions";
import classnames from "classnames";
import { MDBInput, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";

//const usuario = this.props.auth;
var vusuario = "";

class NewFolder extends Component {
  constructor() {
    super();
    this.state = {
      user: vusuario,
      foldername: "",
      description: ""
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/newfolder");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newFolder = {
      user: vusuario,
      foldername: this.state.foldername,
      description: this.state.description
    };

    this.props.newFolder(newFolder, this.props.history);
  };

  render() {
    //const { errors } = this.state;

    const { user } = this.props.auth;
    vusuario = user.id;
    console.log(vusuario);

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form noValidate onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">New Folder</p>
              <MDBInput
                label="Folder Name"
                onChange={this.onChange}
                value={this.state.foldername}
                id="foldername"
                type="text"
              />
              <MDBInput
                hint="Folder Description"
                type="text"
                onChange={this.onChange}
                value={this.state.description}
                id="description"
              />
              <MDBInput
                label="Make it Public"
                filled
                type="checkbox"
                id="public"
              />

              <div className="text-center mt-4">
                <MDBBtn color="green" type="submit">
                  Add New Folder
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

NewFolder.propTypes = {
  newFolder: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { newFolder }
)(withRouter(NewFolder));
