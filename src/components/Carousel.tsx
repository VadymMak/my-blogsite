import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss"; // Import your SCSS file

const Carousel: React.FC = () => {
  const items = [
    "Sunflower Oil",
    "Palm Oil and Margarine",
    "Frying Oil",
    "Sugar",
    "Powdered Milk",
    "Mayonnaise",
  ];

  const images = [
    "/images/vegetable-oil.jpg",
    "/images/palm-oil.jpg",
    "/images/frying-oil.jpg",
    "/images/sugar.jpg",
    "/images/powdered-milk.jpg",
    "/images/mayonnaise.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <div
              className={styles.itemCard}
              style={{
                backgroundImage: `url(${images[index]})`,
              }}
            >
              <h3>{item}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
