import React, { useState } from "react";
import { SliderData } from "./sliderdata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./carousel.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const backSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if array is empty
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {/* adding arrows */}
      <FaArrowAltCircleLeft className="left-arrow" onClick={backSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {/* mapping images from the sliderdata array */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                key={index}
                src={slide.image}
                alt="carousel"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Carousel;
