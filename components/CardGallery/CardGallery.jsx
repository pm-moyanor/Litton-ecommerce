import React, { useState, useRef, useEffect } from "react";
import Card from "../Card/Card";
import Slider from "react-slick";

import styles from "../CardGallery/CardGallery.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-35px"
      
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block" ,color: "green"}}
      onClick={onClick}
    ></div>
  );
}
const CardGallery = ({ cards }) => {
  const settings = {
    dots: true,

    speed: 300,
    focusOnSelect: true,
    infinite: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["main-wrapper"]}>
      <h1>Choose your sound</h1>
      <div className={styles["carousel-wrapper"]}>
        <Slider {...settings}>
          {cards.slice(3, 13).map((card, index) => (
            <div key={card.name + index}>
              <Card product={card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardGallery;
