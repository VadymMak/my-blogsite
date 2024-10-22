// AboutUs.jsx
import React from "react";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>About Us</h2>
          <p>
            UB Market LTD has been actively operating and dynamically developing
            in the export and import market of food products since 2020,
            ensuring supplies to European countries. Our top priority is
            providing mass consumption products from reliable and quality
            manufacturers.
          </p>
          <p>
            We guarantee our customers the highest quality products, a wide
            range, and first-class service from a team of professionals. UB
            Market LTD works with well-known brands and trusted suppliers,
            serving both retail customers and local and national networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
