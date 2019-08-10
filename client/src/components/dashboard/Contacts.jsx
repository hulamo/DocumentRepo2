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

import Files from "./Files";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../actions/API";
import { logoutUser } from "../../actions/authActions";
import Navbar2 from "../layout/Navbar2";

//var userp = "";

//const misFriends = [];
var vusuario = "";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      misFriends: [],
      user: "",
      modal14: false,
      modal15: false,
      friend: "",
      friendname: "",
      description: "",
      idv: "",
      gotofiles: false,
      friendgo: "",
      friendtemp: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.props.onClick = this.props.onClick.bind(this, this.props.name);
  }

  // Modal de Modificar
  togglem = (nr, varp, username, friendname, idv) => () => {
    console.log("username" + username);
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      Friend: varp,
      friendname: friendname,
      username: username,
      idv: idv
    });
  };

  // Modal de Borrar
  toggle = (nr, varp, friendname, idv) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      friend: varp,
      friendname: friendname,
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
  deleteFriend = idv => {
    //console.log("prueba");
    //console.log("idvlllllllllllllllllllllllll" + idv);
    API.deleteFriend(idv)
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
    console.log("getFriend Contacts.js");
    API.getFriend(vusuario)
      .then(res => this.setState({ misFriends: res.data }))
      .catch(err => console.log(err));
  }

  NewFriend = () => {
    //console.log("Redirect");
    this.props.history.push("/newFriend");
    //return <Redirect to="/newFriend" />;
  };

  handleRowClick = nid => {
    console.log(nid);
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onClickFriend = (friend, friendtemp) => () => {
    this.setState({
      friendgo: friend,
      gotofiles: true,
      friendtemp: friendtemp
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
    const data2 = {
      friendname: this.state.friendname
    };

    axios
      .put("/api/friends/update/" + this.state.idv, data2, {
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

    //  console.log(misFriends);
    //console.log(this.state.savedFriends);
    //userp = user.id;

    // *console.log("this.state.misFriends");
    //*console.log(this.state.misFriends);

    let FriendsRow = [];
    var n;
    var click = "";
    var temporal = {};
    let varp = "";
    for (n = 0; n < this.state.misFriends.length; n++) {
      temporal = {};
      click =
        "clickEvent: this.handleRowClick(" + this.state.misFriends[n]._id + ")";
      let varp = "";
      varp = this.state.misFriends[n]._id;
      // console.log(varp);
      temporal = {
        friendname: this.state.misFriends[n].friendname,
        username: this.state.misFriends[n].username,
        handle: (
          <MDBRow>
            <MDBCol md="2" />
            <MDBCol md="10">
              <MDBIcon
                onClick={this.onClickFriend(
                  this.state.misFriends[n]._id,
                  this.state.misFriends[n].friendname
                )}
                icon="Friend-open"
                size="2x"
                color=""
                className={"Open-" + varp}
              />
              &nbsp;&nbsp;
              <MDBIcon
                onClick={this.togglem(
                  15,
                  varp,
                  this.state.misFriends[n].username,
                  this.state.misFriends[n].friendname,
                  this.state.misFriends[n]._id
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
                  this.state.misFriends[n].friendname,
                  this.state.misFriends[n]._id
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
      FriendsRow.push(temporal);
    }

    //console.log("FriendsRow");
    //console.log(FriendsRow);

    const data = {
      columns: [
        {
          label: "Name",
          field: "friendname",
          sort: "asc",
          width: 150
        },
        {
          label: "Username",
          field: "username",
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
      rows: FriendsRow
    };

    if (this.state.gotofiles) {
      return (
        <Files
          friendtemp={this.state.friendtemp}
          friendid={this.state.friendgo}
          hayfriend={true}
        />
      );
    }

    return (
      <MDBContainer>
        <Navbar2 titulo="Contacts" />
        <form noValidate onSubmit={this.onSubmit}>
          <MDBModal
            isOpen={this.state.modal15}
            toggle={this.togglem(15)}
            centered
          >
            <MDBModalHeader toggle={this.togglem(15)}>
              Modify Contact
            </MDBModalHeader>

            <MDBModalBody>
              <MDBInput id="idv" type="hidden" value={this.state.idv} />
              <MDBInput
                id="friendname"
                label="Friend Name"
                onChange={this.onChange}
                value={this.state.friendname}
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
          <MDBModalBody>Friend: &nbsp; {this.state.friendname}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="blue" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn
              color="red"
              onClick={e => {
                e.preventDefault();
                this.deleteFriend(this.state.idv);
              }}
            >
              Delete
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBRow>
          <MDBCol md="12">
            <MDBDataTable
              searchLabel="Search Friend"
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
