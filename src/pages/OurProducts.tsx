import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
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
      {/* SEO Metadata */}
      <Helmet>
        <title>{t("ourProducts")}</title>
        <meta
          name="description"
          content="Explore our high-quality products including vegetable oil, frying oil, sun oil,  palm oil, margarine, shugare and more at UB Market."
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
              index % 2 === 0 ? styles.even : styles.odd // Alternating classes
            }`}
          >
            <div className={styles.productImage}>
              <img
                src={product.image}
                alt={product.name[currentLang]}
                loading="lazy"
              />
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
