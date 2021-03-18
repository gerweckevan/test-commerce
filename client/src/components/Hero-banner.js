import React from "react";
import { isMobile } from "react-device-detect";
//import ButtonLinkGenderPage from "./Button-link-gender-page";
import { Jumbotron, Container } from "reactstrap";


const styles = {
  bannerCoverPc: {

    backgroundImage: 'url("/images/banner-cover-pc.gif")',

    backgroundSize: "cover",

  },
  bannerCoverMobile: {
    backgroundImage: 'url("/images/banner-cover-mobile.gif")',
    backgroundSize: "cover",
  },
  textBanner: {
    textShadow: "3px 3px 3px grey",
    textAlign: "center",
    color: "white",
  },
  centerButtons: {
    textAlign: "center",
    padding: "30px",
  },
  titleH1Pc: {
    fontSize: "80px",
  },
  titleH1Mobile: {
    fontSize: "60px",
  },
};

const {
  bannerCoverPc,
  bannerCoverMobile,
  textBanner,
  centerButtons,
  titleH1Mobile,
  titleH1Pc,
} = styles;

const HeroBanner = () => (
  <Jumbotron fluid style={isMobile ? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{ height: "300px" }}>
      <div style={textBanner}>

        <h1 className="display-3" style={isMobile ? titleH1Mobile : titleH1Pc}>
          Creative Artist Design
        </h1>

      </div>
      
    </Container>
  </Jumbotron>
);


<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>;

