import React, { Component } from "react";
import axios from "axios";
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
  MDBModalFooter,
  MDBInput
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
      modal15: false,
      folder: "",
      foldername: "",
      description: "",
      idv: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.props.onClick = this.props.onClick.bind(this, this.props.name);
  }

  // Modal de Modificar
  togglem = (nr, varp, description, foldername, idv) => () => {
    console.log("description" + description);
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      folder: varp,
      foldername: foldername,
      description: description,
      idv: idv
    });
  };

  // Modal de Borrar
  toggle = (nr, varp, foldername, idv) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      folder: varp,
      foldername: foldername,
      idv: idv
    });
  };

  onClick = e => {
    console.log("valor" + e.target.className);
  };

  /*onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
*/
  deleteFolder = idv => {
    //console.log("prueba");
    //console.log("idvlllllllllllllllllllllllll" + idv);
    API.deleteFolder(idv)
      .then(res => {
        this.setState({
          modal14: false
        });

        this.componentDidMount();
      })
      .catch(err => console.log(err));

    //console.log("borrrar");
  };
  //when this component mounts, grab all books that were save to the database
  componentDidMount() {
    API.getFolder(vusuario)
      .then(res => this.setState({ misFolders: res.data }))
      .catch(err => console.log(err));
  }

  NewFolder = () => {
    //console.log("Redirect");
    this.props.history.push("/newfolder");
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
      foldername: this.state.foldername,
      description: this.state.description
    };

    axios
      .put("/api/folders/update/" + this.state.idv, data2, {
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

  render() {
    const { user } = this.props.auth;
    // this.state.user =  user.id ;
    vusuario = user.id;

    //  console.log(misFolders);
    //console.log(this.state.savedFolders);
    //userp = user.id;

    // *console.log("this.state.misFolders");
    //*console.log(this.state.misFolders);

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
      // console.log(varp);
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
                onClick={this.togglem(
                  15,
                  varp,
                  this.state.misFolders[n].description,
                  this.state.misFolders[n].foldername,
                  this.state.misFolders[n]._id
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
                  this.state.misFolders[n].foldername,
                  this.state.misFolders[n]._id
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
      //console.log("temporal");
      //console.log(temporal);
      FoldersRow.push(temporal);
    }

    //console.log("FoldersRow");
    //console.log(FoldersRow);

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
                id="foldername"
                label="Folder Name"
                onChange={this.onChange}
                value={this.state.foldername}
              />
              <MDBInput
                id="description"
                label="Folder Description"
                value={this.state.description}
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
          <MDBModalBody>Folder: &nbsp; {this.state.foldername}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="blue" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn
              color="red"
              onClick={e => {
                e.preventDefault();
                this.deleteFolder(this.state.idv);
              }}
            >
              Delete
            </MDBBtn>
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
