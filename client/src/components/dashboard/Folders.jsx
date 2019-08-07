import React, { Component } from "react";
import {
  MDBIcon,
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "./../../actions/API";
import { logoutUser } from "../../actions/authActions";

//var userp = "";

//const misFolders = [];
var vusuario = "";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      misFolders: [],
      user: "",
      modal14: false,
      folder: "",
      foldername: ""
    };
    this.onClick = this.onClick.bind(this);
    // this.props.onClick = this.props.onClick.bind(this, this.props.name);
  }

  toggle = (nr, varp, foldername) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      folder: varp,
      foldername: foldername
    });
  };

  onClick = e => {
    console.log("valor" + e.target.className);
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  //when this component mounts, grab all books that were save to the database
  componentDidMount() {
    API.getFolder(vusuario)
      .then(res => this.setState({ misFolders: res.data }))
      .catch(err => console.log(err));
  }

  NewFolder = () => {
    console.log("Redirect");
    this.props.history.push("/newfolder");
    //return <Redirect to="/newfolder" />;
  };

  handleRowClick = nid => {
    console.log(nid);
  };

  render() {
    const { user } = this.props.auth;
    // this.state.user =  user.id ;
    vusuario = user.id;

    //  console.log(misFolders);
    //console.log(this.state.savedFolders);
    //userp = user.id;

    console.log("this.state.misFolders");
    console.log(this.state.misFolders);

    let FoldersRow = [];
    var n;
    var click = "";
    var temporal = {};
    let varp = "";
    for (n = 0; n < this.state.misFolders.length; n++) {
      temporal = {};
      click =
        "clickEvent: this.handleRowClick(" + this.state.misFolders[n]._id + ")";
      let varp = "";
      varp = this.state.misFolders[n]._id;
      console.log(varp);
      temporal = {
        foldername: this.state.misFolders[n].foldername,
        description: this.state.misFolders[n].description,
        handle: (
          <MDBRow>
            <MDBCol md="2" />
            <MDBCol md="10">
              <MDBIcon
                onClick={this.onClick}
                icon="folder-open"
                size="2x"
                color=""
                className={"Open-" + varp}
              />
              &nbsp;&nbsp;
              <MDBIcon
                onClick={this.onClick}
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
                  this.state.misFolders[n].foldername
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
      FoldersRow.push(temporal);
    }

    console.log("FoldersRow");
    console.log(FoldersRow);

    const data = {
      columns: [
        {
          label: "Folder Name",
          field: "foldername",
          sort: "asc",
          width: 150
        },
        {
          label: "Folder Description",
          field: "description",
          sort: "asc",
          width: 270
        },
        {
          label: "Action",
          field: "accion",
          sort: "asc",
          width: 150
        }
      ],
      rows: FoldersRow
    };

    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            Are You Sure You Want to Delete?
          </MDBModalHeader>
          <MDBModalBody>Folder: &nbsp; {this.state.foldername}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark-green" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn color="red">Delete</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBRow>
          <MDBCol md="12">
            <MDBDataTable
              searchLabel="Search Folder"
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

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

/*

              <MDBBtn
                value={"folders/view" + varp}
                id={"abre" + n}
                onClick={this.onClick}
                color="green"
                rounded
                size="sm"
              >
                Open
              </MDBBtn>
              &nbsp;&nbsp;
              <MDBBtn
                value={"folders/edit" + varp}
                id={"edit" + n}
                onClick={this.onClick}
                color="yellow"
                rounded
                size="sm"
              >
                Edit
              </MDBBtn>
              &nbsp;&nbsp;
              <MDBBtn
                value={"folders/delete" + varp}
                id={"delete" + n}
                onClick={this.onClick}
                color="red"
                rounded
                size="sm"
              >
                Delete
              </MDBBtn>
*/
