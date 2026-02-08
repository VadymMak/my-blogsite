import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./OurProducts.module.scss";
import { products } from "../constants/products";

const OurProducts: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  type LanguageType = "en" | "bg" | "ua";
  const currentLang = (i18n.language as LanguageType) || "en";

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.ourProducts}>
      <h2 className={styles.title}>{t("ourProducts")}</h2>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${styles.productCard} ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
            onClick={() => handleCardClick(product.id)}
          >
            <div className={styles.productImage}>
              <img
                src={product.image}
                alt={product.name[currentLang]}
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>
                {product.name[currentLang]}
              </h3>
              {product.description[currentLang]
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              {expandedId === product.id && (
                <div className={styles.expandedInfo}>
                  {product.safety && (
                    <p>
                      <strong>{t("safety")}:</strong>{" "}
                      {product.safety[currentLang]}
                    </p>
                  )}
                  {product.alternative && (
                    <p>
                      <strong>{t("alternative")}:</strong>{" "}
                      {product.alternative[currentLang]}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;