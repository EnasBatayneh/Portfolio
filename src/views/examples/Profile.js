/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/pic.jpg";
import res from "assets/img/theme/res.png";

import heart from "assets/img/theme/heart.png";



class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="https://www.linkedin.com/in/enas-bataineh/"
                          // onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button

                          className="float-right"
                          color="default"
                          href="https://github.com/En-ZUH"
                          // onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Follow
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">5</span>
                          <span className="description">Connections</span>
                        </div>
                        <div>
                          <span className="heading">8</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">7</span>
                          <span className="description">Projects</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Enas Batayneh{" "}
                      <span className="font-weight-light"> 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Irbid, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Front-End developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Yarmouk University
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Hello everyone<img src={heart}></img>, My name is Enas Bataineh, I hold a bachelor’s degree in Computer Science, I graduated from Yarmouk University.
                          I worked as Technical Support, with the Jordan Education Initiative, I love web design a lot, which is why I joined the ASAC Web-Development Scholarship, which is the first step to start a career development plan.
                          I aspire to be a "front end developer", someday.. <img src={res}></img>

                        </p>
                        {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
