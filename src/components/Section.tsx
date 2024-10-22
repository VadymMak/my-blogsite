import React from "react";
import styles from "./Section.module.scss";

const Section: React.FC = () => {
  return (
    <div className={styles.section1}>
      <h2>Our Products</h2>
      <p>Discover our wide range of products that cater to your needs.</p>
    </div>
  );
};

const Divider: React.FC = () => {
  return <div className={styles.divider} />;
};

const NextSection: React.FC = () => {
  return (
    <div className={styles.section2}>
      <h2>About Us</h2>
      <p>Learn more about our company's mission and values.</p>
    </div>
  );
};

const CombinedSections: React.FC = () => {
  return (
    <>
      <Section />
      <Divider />
      <NextSection />
    </>
  );
};

export default CombinedSections;
