import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import styles from "./OurProducts.module.scss";
import { products } from "../constants/products";

const OurProducts: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [expandedId, setExpandedId] = useState<number | null>(null); // Track expanded product

  // Define the language type
  type LanguageType = "en" | "bg" | "ua";
  const currentLang = (i18n.language as LanguageType) || "en"; // Fallback to "en"

  // Toggle expanded state
  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.ourProducts}>
      {/* SEO Metadata */}
      <Helmet>
        <title>{t("ourProducts")}</title>
        <meta
          name="description"
          content="Explore our high-quality products including vegetable oil, frying oil, sun oil, palm oil, margarine, sugar and more at UB Market."
        />
        <meta
          name="keywords"
          content="products, quality products, UB Market, vegetable oil, palm oil, margarine, sugar, dairy products, condiments, cooking ingredients"
        />
        <link rel="canonical" href="https://ub-market.com/our-products" />
        <meta property="og:title" content={t("ourProducts")} />
        <meta
          property="og:description"
          content="Discover our wide range of quality products at UB Market. Browse our selection and find the perfect item for you."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://ub-market.com/our-products" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "${t("ourProducts")}",
              "description": "Discover our wide range of quality products at UB Market.",
              "image": "https://ub-market.com/images/logo.png",
              "brand": {
                "@type": "Brand",
                "name": "UB Market"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://ub-market.com/our-products",
                "priceCurrency": "USD",
                "price": "0.00",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>

      <h2 className={styles.title}>{t("ourProducts")}</h2>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${styles.productCard} ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
            onClick={() => handleCardClick(product.id)} // Click handler on entire card
          >
            <div className={styles.productImage}>
              <img
                src={product.image}
                alt={product.name[currentLang]}
                loading="lazy"
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
