import React from "react";
import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CardGallery.module.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3, // Number of items to show by default
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const CardGallery = ({ cards }) => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["title-container"]}>
        <h2>Find your sound</h2>
      </div>
     
        <Slider {...settings} className={styles["slider"]}>
          {cards.slice(4, 10).map((card) => (
            <Card key={card.id} product={card} />
          ))}
        </Slider>
     
    </div>
  );
};

export default CardGallery;
