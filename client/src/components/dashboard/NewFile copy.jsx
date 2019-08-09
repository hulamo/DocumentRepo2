import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { newFile } from "../../actions/authActions";

import axios from "axios";
import { MDBInput, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";

//const usuario = this.props.auth;
var vusuario = "";

class NewFile extends Component {
  constructor() {
    super();
    this.state = {
      user: vusuario,
      filename: "",
      description: "",
      file: "",
      filelink: ""
    };

    this.onChangef = this.onChangef.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/newfile");
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

  onChangef = e => {
    this.setState({ file: e.target.files[0] });
    this.setState({ filelink: e.target.files[0].name });
    //this.setState({ filelink: e.target.value });
    console.log("File" + e.target.files[0]);
  };

  onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", this.state.file);
    data.append("user", vusuario);
    data.append("filename", this.state.filename);
    data.append("filelink", this.state.filelink);
    data.append("filedescription", this.state.description);

    axios
      .post("/api/files/add", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        this.setState({ file: "", filename: "", description: "" });
        //e.target.files[0] = "";
        //e.target.files.value = null;
        // then print response status
        console.log(res.statusText);
      });

    // this.props.newFile(Data, this.props.history);
  };

  render() {
    const { user } = this.props.auth;
    vusuario = user.id;
    console.log("usuario:" + vusuario);

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form
              encType="multipart/form-data"
              noValidate
              onSubmit={this.onSubmit}
            >
              <p className="h4 text-center mb-4">New File</p>
              <MDBInput
                label="File Name"
                onChange={this.onChange}
                value={this.state.filename}
                id="filename"
                type="text"
              />
              <MDBInput
                label="File Description"
                onChange={this.onChange}
                value={this.state.description}
                id="description"
                type="text"
              />
              <MDBInput onChange={this.onChangef} type="file" />
              <div className="text-center mt-4">
                <MDBBtn color="green" type="submit">
                  Add New File
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

NewFile.propTypes = {
  newFile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { newFile }
)(withRouter(NewFile));
