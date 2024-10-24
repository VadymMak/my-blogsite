import React from "react";
import styles from "./OurProducts.module.scss";
import { products } from "../constants/products";

const OurProducts: React.FC = () => {
  return (
    <section className={styles.ourProducts}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${styles.productCard} ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
          >
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              {product.description.split("\n\n").map((paragraph, index) => (
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
