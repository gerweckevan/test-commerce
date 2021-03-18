import React from "react";
import { Container, Row, Col } from "reactstrap";
import signOut from "../storeConfig";
const styles = {
  backgroundColor: "#072a48",
  paddingTop: "50px",
  paddingBottom: "50px",
  color: "purple",
  textAlign: "center",
};

const Footer = () => (
  <div style={styles}>
    <Container>
      <Row>
        <Col md="12" style={{ textAlign: "center", paddingBottom: "30px" }}>

          <b>Talk to us</b>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          {" "}
          <a href="#" target="_blank">
            About the brand
          </a>
        </Col>
        <Col md="4">
          <a href="#" target="_blank">
            Contact us
          </a>
        </Col>
        <Col md="4">
          {" "}
          <a href="https://www.instagram.com/rekstotw/" target="_blank">
            Instagram
          </a>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          {" "}
          <a href="#" target="_blank">
            Order Status
          </a>
        </Col>
        <Col md="4">
          <a href="#" target="_blank">
            Our ecological actions
          </a>
        </Col>
        <Col md="4">
          <a href="https://www.facebook.com/reks.kadinger" target="_blank">
            Facebook
          </a>
        </Col>
      </Row>
      <Row>
        <Col md="12" style={{ textAlign: "center", paddingTop: "30px" }}>
          Virtual Boost © 2021 All Rights Reserved

        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
