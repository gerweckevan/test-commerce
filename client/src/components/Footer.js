import React from "react";
import { Container, Row, Col } from "reactstrap";
import signOut from "../storeConfig";
const styles = {
  backgroundColor: "#072a48",
  paddingTop: "50px",
  paddingBottom: "50px",
  color: "white",
  textAlign: "center",
};

const Footer = () => (
  <div style={styles}>
    <Container>
      <Row>
        <Col md="12" style={{ textAlign: "center", paddingBottom: "30px" }}>
          <b>Welcome</b>
        </Col>
      </Row>
      <Row>
        <Col md="4">TOTW -Take Over The World</Col>
        <Col md="4">Creative Artist Design</Col>
        <Col md="4">We sell the best merchandise and artwork.</Col>
      </Row>
      <Row>
        <Col md="4"></Col>
        <Col md="4"></Col>
        <Col md="4"></Col>
      </Row>
      <Row>
        <Col md="4"></Col>
        <Col md="4">Shop now and see our collections</Col>
        <Col md="4"></Col>
      </Row>
      <Row>
        <Col md="12" style={{ textAlign: "center", paddingTop: "30px" }}>
          Creative Artist Design © 2021 All Rights Reserved
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
