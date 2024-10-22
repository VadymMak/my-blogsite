import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss"; // Import your SCSS file

const Carousel: React.FC = () => {
  // const items = [
  //   "Sunflower Oil",
  //   "Palm Oil and Margarine",
  //   "Frying Oil",
  //   "Sugar",
  //   "Powdered Milk",
  //   "Mayonnaise",
  // ];

  // const images = [
  //   "/images/vegetable-oil.jpg",
  //   "/images/palm-oil.jpg",
  //   "/images/frying-oil.jpg",
  //   "/images/sugar.jpg",
  //   "/images/powdered-milk.jpg",
  //   "/images/mayonnaise.jpg",
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    { name: "Sunflower Oil", image: "/images/vegetable-oil.jpg" },
    { name: "Palm Oil and Margarine", image: "/images/palm-oil.jpg" },
    { name: "Frying Oil", image: "/images/frying-oil.jpg" },
    { name: "Sugar", image: "/images/sugar.jpg" },
    { name: "Powdered Milk", image: "/images/powdered-milk.jpg" },
    { name: "Mayonnaise", image: "/images/mayonnaise.jpg" },
  ];

  return (
    <section className={styles.productSection}>
      {/* Section Title */}
      <div className={styles.sectionTitle}>
        <h2>Our Products</h2>
        <p>Explore our range of high-quality products</p>
      </div>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className={styles.carouselItem}>
              <div
                className={styles.itemContent}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
