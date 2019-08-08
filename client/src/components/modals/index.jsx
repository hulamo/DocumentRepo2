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

class ModalDelete extends Component {
  render() {
    return (
      <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
        <MDBModalHeader toggle={this.toggle(14)}>
          Are You Sure You Want to Delete?
        </MDBModalHeader>
        <MDBModalBody>Folder: &nbsp; {this.state.foldername}</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="dark-green" onClick={this.toggle(14)}>
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
    );
  }
}

export default ModalDelete;
