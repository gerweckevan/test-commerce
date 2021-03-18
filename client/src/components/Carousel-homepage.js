import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl, Col, Row } from "reactstrap";
import ButtonInternalLink from "./Button-internal-link";

const styles = {
  sliderContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
  },
};

const items = [
  {
    src: "https://miro.medium.com/max/3840/1*wJt3v7Gs46uticTUj4y9zg.gif",
    altText: "Slide 1",
    caption: "Slide 1",
    title: "Artwork by Category",
    subtitle: "Find your favorite",
    btn: {
      content: "Categories",
      link: "/category/men",
    },
  },
  {
    src: "https://media.giphy.com/media/xvRPIAtMwKQ2SlxKtx/giphy.gif",
    altText: "Slide 2",
    caption: "Slide 2",
    title: "What's New",
    subtitle: "Check out the newest pieces!",
    btn: {
      content: "New Stuff",
      link: "/category/men",
    },
  },
  {
    src:

      "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",

    altText: "Slide 3",
    caption: "Slide 3",
    title: "Design your gear",
    subtitle: "Create your own look",
    btn: {
      content: "Design",
      link: "/category/men",
    },
  },
];

class CarouselHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((x) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={x.src}
        >
          <Row style={{ backgroundColor: "#072a48" }}>
            <Col md="6">
              <img
                src={x.src}
                alt={x.altText}
                style={{ width: "100%", maxHeight: "500px" }}
              />
            </Col>
            <Col md="6" style={styles.sliderContent}>
              <h2>{x.title}</h2>
              <p>{x.subtitle}</p>
              <ButtonInternalLink
                content={x.btn.content}
                link={x.btn.link}
                lightOrDark="light"
                sizeBtn="lg"
              />
            </Col>
          </Row>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CarouselHomepage;
