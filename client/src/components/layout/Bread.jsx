import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

const BreadcrumbPage = props => {
  return (
    <MDBContainer>
      <MDBBreadcrumb color="indigo lighten-4">
        <MDBBreadcrumbItem appendIcon icon="caret-right">
          Home
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon icon="caret-right">
          Library
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon active>
          Data
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb color="blue-grey lighten-4">
        <MDBBreadcrumbItem appendIcon icon="angle-double-right">
          Home
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon icon="angle-double-right">
          Library
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon active>
          Data
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb color="purple lighten-4">
        <MDBBreadcrumbItem appendIcon icon="angle-right">
          Home
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon icon="angle-right">
          Library
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon active>
          Data
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb color="red lighten-4">
        <MDBBreadcrumbItem appendIcon icon="angle-double-left">
          Home
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon icon="angle-double-left">
          Library
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon active>
          Data
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb color="cyan lighten-4">
        <MDBBreadcrumbItem appendIcon icon="angle-left">
          Home
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon icon="angle-left">
          Library
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon active>
          Data
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb color="amber lighten-4">
        <MDBBreadcrumbItem appendIcon icon="caret-left">
          Home
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon icon="caret-left">
          Library
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon active>
          Data
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  );
};

export default BreadcrumbPage;
