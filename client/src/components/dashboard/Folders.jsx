import React, { Component } from "react";
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

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
      user: ""
    };
  }

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
          <MDBBtn color="green" rounded size="sm">
            Abrir
          </MDBBtn>
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
          label: "Nombre del Folder",
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
      rows: FoldersRow
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
