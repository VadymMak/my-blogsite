// src/pages/About.tsx
import React from "react";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.intro}>
          UB Market LTD has been actively operating and dynamically developing
          in the export and import market of food products since 2020, ensuring
          supplies to European countries. Our top priority is providing mass
          consumption products from reliable and quality manufacturers.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p>
            Our mission is to build long-lasting relationships with our partners
            and customers by offering top-quality products and exceptional
            service. We aim to create value at every step of the supply chain,
            ensuring that consumers receive products that are safe, nutritious,
            and sustainably sourced.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p>
            UB Market LTD envisions becoming a leading supplier in the
            international food market by expanding our product range and
            entering new markets. We strive to set industry standards through
            innovation and sustainability, contributing to a healthier and more
            connected world.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <ul className={styles.valuesList}>
            <li>
              <strong>Quality:</strong> We never compromise on the quality of
              our products.
            </li>
            <li>
              <strong>Integrity:</strong> We believe in transparency and honesty
              in every transaction.
            </li>
            <li>
              <strong>Customer Focus:</strong> We always prioritize the needs
              and satisfaction of our customers.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously seek ways to improve
              our products and services.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to
              environmentally friendly practices in all our operations.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our History</h2>
          <p>
            Since our founding in 2020, UB Market LTD has grown from a small
            local supplier to a trusted partner for businesses across Europe.
            Our success is built on a foundation of hard work, dedication, and a
            passion for providing the best products in the market. Over the
            years, we've expanded our operations and diversified our product
            offerings, always keeping pace with the evolving needs of our
            customers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <p>
            Behind UB Market LTD is a team of highly skilled professionals who
            are passionate about the food industry. Our team works tirelessly to
            source, inspect, and distribute products that meet the highest
            standards of quality and safety.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
