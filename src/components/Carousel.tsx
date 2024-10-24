import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss"; // Import your SCSS file
import Modal from "./Modal";

import { products } from "../constants/products";

interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Carousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

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

  const openModal = (product: IProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    console.log("clicked");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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
            <div
              key={index}
              className={styles.carouselItem}
              onClick={() => openModal(product)}
            >
              <div
                className={styles.itemContent}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      </div>
    </section>
  );
};

export default Carousel;
