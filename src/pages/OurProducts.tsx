import React from "react";
import styles from "./OurProducts.module.scss";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sunflower Oil",
    image: "/images/sun-flower.jpg",
    description:
      "Sunflower Oil RDBW – Refined Deodorized Sunflower Oil under the KOROLIVSKYI SMAK brand – is a high-quality oil with the highest degree of purification, offering a neutral taste and aroma. \n\n This refined oil is the perfect choice for culinary use, especially when cooking with heat. Due to its composition, RDBW oil is suitable for frying, extended cooking, and heat processing of various dishes and ingredients, while preserving their flavor qualities. Choose KOROLIVSKYI SMAK for your kitchen and taste the difference!",
  },
  {
    id: 2,
    name: "Palm Oil and Margarine",
    image: "/images/palm-oil.jpg",
    description:
      "Mayonnaise 67% PC-4.5 kg, KOROLIVSKIY SMAK – is a top-quality product designed to meet the needs of both home and professional kitchens. With its rich flavor and thick consistency, this mayonnaise is perfect for preparing salads, sauces, marinades, and other culinary masterpieces. The product contains an optimal fat content (67%), providing dishes with a rich taste and a smooth texture. The quality of KOROLIVSKIY SMAK is backed by years of consumer trust. You can purchase the 67% PC-4.5 kg mayonnaise from UB Market LTD at a competitive price. We offer great terms for our customers and guarantee high-quality products and first-class service.",
  },
  {
    id: 3,
    name: "Frying Oil",
    image: "/images/frying-oil.jpg",
    description:
      "Sunflower DEEP FRYING OIL – is a product tailored to modern culinary trends for deep frying, sautéing, and baking. The oil heats up quickly and evenly, allowing you to prepare delicious dishes with an appetizing golden crust, without excess fat or an overpowering smell. This product is made from a unique recipe using sunflower oil, class P with the addition of an anti-foaming agent (E900) and antioxidants (E320, E321). This technology makes the oil thermally stable and resistant to prolonged heat treatment, with a smoke point exceeding 225°C, making it ideal for deep frying.",
  },
  {
    id: 4,
    name: "Sugar",
    image: "/images/sugar.jpg",
    description:
      "Sugar of the highest quality from UB Market LTD is a product that meets all standards and quality norms. Our sugar is certified and comes with all necessary documents confirming its safety and compliance with international requirements. This sugar is ideal for use in the food industry as well as at home. Thanks to strict quality control, our customers receive only pure, white sugar without impurities. Order sugar from UB Market LTD and get a high-quality product on favorable terms. We guarantee timely delivery and professional service. UB Market LTD – your reliable supplier!",
  },
  {
    id: 5,
    name: "Powdered Milk",
    image: "/images/dry-milk.jpg",
    description:
      "UHT Milk 3.5%, 1L – is a top-quality product that provides a long shelf life without losing its nutritional properties. Thanks to modern ultra-high-temperature (UHT) processing technology, the milk retains its natural taste, beneficial vitamins, and minerals. It is ideal for use in cooking, baking, preparing coffee, sauces, and many other dishes. This milk easily dissolves without leaving lumps and can be an indispensable assistant in the food industry’s production processes. You can purchase UHT Milk 3.5%, 1L from UB Market LTD. We guarantee high product quality and offer favorable terms for cooperation. Choose a reliable supplier – UB Market LTD!",
  },
  {
    id: 6,
    name: "Mayonnaise",
    image: "/images/mayonnaise.jpg",
    description:
      "Mayonnaise 67% PC-4.5 kg, KOROLIVSKIY SMAK – is a top-quality product designed to meet the needs of both home and professional kitchens. With its rich flavor and thick consistency, this mayonnaise is perfect for preparing salads, sauces, marinades, and other culinary masterpieces. The product contains an optimal fat content (67%), providing dishes with a rich taste and a smooth texture. The quality of KOROLIVSKIY SMAK is backed by years of consumer trust. You can purchase the 67% PC-4.5 kg mayonnaise from UB Market LTD at a competitive price. We offer favorable terms for our customers and guarantee high-quality products and first-class service.",
  },
];

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
