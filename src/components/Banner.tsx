import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles["banner-content"]}>
        <h1>Sunflower Oil Trading</h1>
        <p>
          Ukrainian-Bulgarian export-import company UB Market LTD, we invite you
          to collaborate!
        </p>
      </div>
    </section>
  );
};

export default Banner;
