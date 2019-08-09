import React, { Component } from "react";
import {
  MDBDataTable,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdbreact";

import { withRouter, Link } from "react-router-dom";

import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../actions/API";
import { logoutUser } from "../../actions/authActions";

//var userp = "";

//const misFolders = [];
var vusuario = "";
class Files extends Component {
  constructor(props) {
    super(props);

    this.state = {
      misFiles: [],
      user: "",
      modal14: false,
      modal15: false,
      file: "",
      filename: "",
      filedescription: "",
      fileglink: "",
      idv: ""
    };

    //    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    //  this.onChange = this.onChange.bind(this);
  }

  togglem = (nr, varp, filedescription, filename, idv) => () => {
    console.log("description" + filedescription);
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      file: varp,
      filename: filename,
      filedescription: filedescription,
      idv: idv
    });
  };

  toggle = (nr, varp, filename, idv) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      file: varp,
      filename: filename,
      idv: idv
    });
  };

  onClick = e => {
    console.log("valor" + e.target.className);
  };

  deleteFile = idv => {
    //console.log("prueba");
    //console.log("idvlllllllllllllllllllllllll" + idv);
    API.deleteFile(idv)
      .then(res => {
        this.setState({
          modal14: false
        });

        this.componentDidMount();
      })
      .catch(err => console.log(err));

    //console.log("borrrar");
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  //when this component mounts, grab all books that were save to the database
  componentDidMount() {
    console.log("folderpasado" + this.props.folderid);
    if (this.props.hayfolder === true) {
      API.getFilef(vusuario, this.props.folderid)
        .then(res => {
          console.log("res-data" + res.data);
          this.setState({ misFiles: res.data });
          //console.log("MisFIles" + this.state.misFiles[0].fileglink);
        })
        .catch(err => console.log(err));
    } else {
      API.getFile(vusuario)
        .then(res => {
          console.log("res-data" + res.data);
          this.setState({ misFiles: res.data });
          console.log("MisFIles" + this.state.misFiles[0].fileglink);
        })
        .catch(err => console.log(err));
    }
  }

  NewFile = () => {
    console.log("Redirect");
    this.props.history.push("/newfile");
    //return <Redirect to="/newfolder" />;
  };

  handleRowClick = nid => {
    console.log(nid);
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
    const data2 = {
      filename: this.state.filename,
      filedescription: this.state.filedescription
    };

    axios
      .put("/api/files/update/" + this.state.idv, data2, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        this.setState({
          modal15: false
        });

        this.componentDidMount();
      })
      .catch(err => console.log(err));
  };

  onClickr = link => {
    window.open(link, "_blank");
    //return <Redirect to="/login" />;
  };

  render() {
    const { user } = this.props.auth;
    vusuario = user.id;

    let FilesRow = [];
    var n;
    var click = "";
    var temporal = {};
    let varp = "";
    for (n = 0; n < this.state.misFiles.length; n++) {
      temporal = {};
      click =
        "clickEvent: this.handleRowClick(" + this.state.misFiles[n]._id + ")";
      let varp = "";
      varp = this.state.misFiles[n]._id;
      console.log(varp);
      temporal = {
        filename: this.state.misFiles[n].filename,
        filedescription: this.state.misFiles[n].filedescription,
        handle: (
          <MDBRow>
            <MDBCol md="2" />
            <MDBCol md="10">
              <MDBIcon
                onClick={this.onClickr.bind(
                  this,
                  this.state.misFiles[n].fileglink
                )}
                icon="book-open"
                size="2x"
                color=""
                className={"Open-" + varp}
              />
              &nbsp;&nbsp;
              <MDBIcon
                onClick={this.togglem(
                  15,
                  varp,
                  this.state.misFiles[n].filedescription,
                  this.state.misFiles[n].filename,
                  this.state.misFiles[n]._id
                )}
                icon="pen"
                size="2x"
                color=""
                className={"Edit-" + varp}
              />
              &nbsp;&nbsp;
              <MDBIcon
                onClick={this.toggle(
                  14,
                  varp,
                  this.state.misFiles[n].filename,
                  this.state.misFiles[n]._id
                )}
                icon="trash-alt"
                size="2x"
                color=""
                className={"Delete-" + varp}
              />
            </MDBCol>
          </MDBRow>
        ),
        clickEvent: () => this.handleRowClick(varp)
      };
      console.log("temporal");
      console.log(temporal);
      FilesRow.push(temporal);
    }

    console.log("FoldersRow");
    console.log(FilesRow);

    const data = {
      columns: [
        {
          label: "Archvivo",
          field: "foldername",
          sort: "asc",
          width: 150
        },
        {
          label: "Descripción",
          field: "description",
          sort: "asc",
          width: 270
        },
        {
          label: "Accion",
          field: "accion",
          sort: "asc",
          width: 150
        }
      ],
      rows: FilesRow
    };

    return (
      <MDBContainer>
        <form noValidate onSubmit={this.onSubmit}>
          <MDBModal
            isOpen={this.state.modal15}
            toggle={this.togglem(15)}
            centered
          >
            <MDBModalHeader toggle={this.togglem(15)}>
              Modificar Carpeta
            </MDBModalHeader>

            <MDBModalBody>
              <MDBInput id="idv" type="hidden" value={this.state.idv} />
              <MDBInput
                id="filename"
                label="File Name"
                onChange={this.onChange}
                value={this.state.filename}
              />
              <MDBInput
                id="filedescription"
                label="File Description"
                value={this.state.filedescription}
                onChange={this.onChange}
              />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="blue" onClick={this.togglem(15)}>
                Close
              </MDBBtn>
              <MDBBtn color="success" type="submit">
                Modify
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </form>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            Are You Sure You Want to Delete?
          </MDBModalHeader>
          <MDBModalBody>File: &nbsp; {this.state.filename}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="blue" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn
              color="red"
              onClick={e => {
                e.preventDefault();
                this.deleteFile(this.state.idv);
              }}
            >
              Delete
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBRow>
          <MDBCol md="12">
            <MDBDataTable
              searchLabel="Search File"
              btn
              striped
              bordered
              small
              data={data}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Files.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Files);
