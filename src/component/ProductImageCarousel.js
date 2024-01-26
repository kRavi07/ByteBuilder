import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Image } from "react-bootstrap";

const ProductImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="product-carousel">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={400}
        totalSlides={images.length}
        currentSlide={currentSlide}
        touchEnabled={true}
        dragEnabled={true}
      >
        <Slider>
          {images.map((image, index) => (
            <Slide index={index} key={index}>
              <ImageWithZoom src={image} alt={`Product Image ${index}`} />
            </Slide>
          ))}
        </Slider>
        <DotGroup
          className="carousel-dots"
          style={{
            height: "50px",
            width: "50px",
          }}
        >
          {images.map((image, index) => (
            <Image src={image} key={index} />
          ))}
        </DotGroup>
      </CarouselProvider>
    </div>
  );
};

export default ProductImageCarousel;
