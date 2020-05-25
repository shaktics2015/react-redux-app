import React from "react";
import Carousel from "react-bootstrap/Carousel";

var imgStyle = {
  width: "98%!important",
  borderRadius: "36px",
  paddingLeft: "2%",
};

export default function CustomCarousel() {
  return (
    <Carousel
      interval={6000}
      keyboard={false}
      pauseOnHover={true}
      className="carouselSafeMargin"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={imgStyle}
          src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={imgStyle}
          src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
