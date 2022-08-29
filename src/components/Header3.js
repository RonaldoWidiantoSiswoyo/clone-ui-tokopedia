import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header3.css";
import { UncontrolledCarousel } from "reactstrap";

class Header3 extends React.Component {
  render() {
    return (
      <UncontrolledCarousel
        className="carousel-uncontrolled"
        items={[
          {
            key: 1,
            src: "assets/img/slide/3.png",
          },
          {
            key: 2,
            src: "assets/img/slide/4.png",
          },
        ]}
      />
    );
  }
}
export default Header3;
