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
      folder: "",
      filename: "",
      filedescription: "",
      idv: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  //when this component mounts, grab all books that were save to the database
  componentDidMount() {
    API.getFile(vusuario)
      .then(res => this.setState({ misFiles: res.data }))
      .catch(err => console.log(err));
  }

  NewFile = () => {
    console.log("Redirect");
    this.props.history.push("/newfile");
    //return <Redirect to="/newfolder" />;
  };

  handleRowClick = nid => {
    console.log(nid);
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
          <MDBBtn color="green" rounded size="sm">
            Abrir
          </MDBBtn>
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
        <MDBRow>
          <MDBCol md="12">
            <MDBDataTable btn striped bordered small data={data} />
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
