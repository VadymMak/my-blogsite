import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.scss"; // Import your SCSS file
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import { products, IProduct } from "../constants/products";
import i18n from "../118n/i18n";

type LanguageKey = "en" | "bg" | "ua";

const Carousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const { t } = useTranslation();

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
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className={styles.productSection}>
      <div className={styles.sectionTitle}>
        <h2>{t("ourProducts")}</h2>
        <p>{t("exploreProducts")}</p>
      </div>

      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.carouselItem}
              onClick={() => openModal(product)}
            >
              <div
                className={styles.itemContent}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <h3>{product.name[i18n.language as LanguageKey]}</h3>
              </div>
            </div>
          ))}
        </Slider>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct} // Pass the selected product directly
        />
      </div>
    </section>
  );
};

export default Carousel;
