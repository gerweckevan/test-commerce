import React from "react";
import { Helmet } from "react-helmet";
import HeroBanner from "../components/Hero-banner";
import CarouselHomepage from "../components/Carousel-homepage";

const styles = { marginTop: "-33px" };

const Homepage = () => (
  <div>
    <Helmet>
      <title>Creative Artist Design</title>

      <meta name="description" content="Homepage" />

    </Helmet>
    <HeroBanner />
    <div style={styles}>
      <CarouselHomepage />
    </div>
  </div>
);

export default Homepage;
