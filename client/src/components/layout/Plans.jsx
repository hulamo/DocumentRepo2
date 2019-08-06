import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";
/*
<img
              src={process.env.PUBLIC_URL + "documentrepo.jpg"}
              classNameName="img-fluid mx-auto"
              alt="aligment"
            />
*/

/*
<MDBRow>
          <MDBCol md="6" classNameName="mx-auto">
            <img
              src={process.env.PUBLIC_URL + "documentrepo.jpg"}
              classNameName="img-fluid mx-auto"
              alt="aligment"
            />
          </MDBCol>
        </MDBRow>
*/

class Landing extends Component {
  render() {
    return (
      <container>
        <MDBRow className="justify-content-md-center">
          <MDBCol md="8">
            <section className="text-center">
              <h2 className="h1-responsive font-weight-bold text-center">
                Pricing Plans
              </h2>
              <p
                style={{ fontSize: 24 }}
                className="grey-text text-center mx-auto "
              >
                We have the plan to suit your needs, start organizing and
                sharing your documents now.
              </p>
              <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard pricing>
                    <div className="price header white-text success-color rounded-top">
                      <h2 className="number">0</h2>
                      <div className="version">
                        <h5 className="mb-0">Free</h5>
                      </div>
                    </div>
                    <MDBCardBody className="striped mb-1">
                      <ul>
                        <li>
                          <p className="mt-2">
                            <MDBIcon icon="check" className="green-text pr-2" />
                            1 GB Of Storage
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Unlimited Contacts
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Unlimited shared information
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            100 Files
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="times" className="red-text pr-2" />
                            Personal PublicRepo
                          </p>
                        </li>
                      </ul>
                      <MDBBtn href="/register" color="green">
                        Buy now
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard pricing>
                    <div className="price header white-text success-color-dark rounded-top">
                      <h2 className="number">10</h2>
                      <div className="version">
                        <h5 className="mb-0">Basic</h5>
                      </div>
                    </div>
                    <MDBCardBody className="striped mb-1">
                      <ul>
                        <li>
                          <p className="mt-2">
                            <MDBIcon icon="check" className="green-text pr-2" />
                            5 GB Of Storage
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Unlimited Contacts
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Unlimited shared information
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            250 Files
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Personal PublicRepo
                          </p>
                        </li>
                      </ul>
                      <MDBBtn href="/register" color="green">
                        Buy now
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard pricing>
                    <div className="price header white-text default-color-dark rounded-top">
                      <h2 className="number">30</h2>
                      <div className="version">
                        <h5 className="mb-0">Corporate</h5>
                      </div>
                    </div>
                    <MDBCardBody className="striped mb-1">
                      <ul>
                        <li>
                          <p className="mt-2">
                            <MDBIcon icon="check" className="green-text pr-2" />
                            10 GB Of Storage
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Unlimited Contacts
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Unlimited shared information
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            500 Files
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="check" className="green-text pr-2" />
                            Corporate PublicRepo
                          </p>
                        </li>
                      </ul>
                      <MDBBtn href="/register" color="green">
                        Buy now
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBCol>
        </MDBRow>
      </container>
    );
  }
}

/*
className Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} classNameName="container valign-wrapper">
        <div classNameName="row">
          <div classNameName="col s12 center-align">
            <h4>
              <b>TeamPencil</b>
            </h4>
            <p classNameName="flow-text grey-text text-darken-1">
              Organiza, administra y comparte tu trabajo.
            </p>
            <br />
            <div classNameName="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                classNameName="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div classNameName="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                classNameName="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
*/
export default Landing;
