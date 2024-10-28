import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./OurProducts.module.scss";
import { products } from "../constants/products";

const OurProducts: React.FC = () => {
  const { i18n, t } = useTranslation();

  // Define the language type and cast i18n.language to ensure valid indexing
  type LanguageType = "en" | "bg" | "ua";
  const currentLang = i18n.language as LanguageType;

  return (
    <section className={styles.ourProducts}>
      <h2 className={styles.title}>{t("ourProducts")}</h2>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${styles.productCard} ${
              index % 2 === 0 ? styles.even : styles.odd // Alternating classes
            }`}
          >
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name[currentLang]} />
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name[currentLang]}</h3>
              {product.description[currentLang]
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
