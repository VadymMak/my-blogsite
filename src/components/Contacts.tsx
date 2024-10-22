// src/components/Contacts.tsx
import React from "react";
import styles from "./Contacts.module.scss"; // Import your styles

const Contacts: React.FC = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles["contacts-title"]}>
        <h2>Contact Us</h2>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h3>Address</h3>
          <p>
            U B Market PLLC Legal address: Bulgaria, Varna, 9010, Sirma Voivoda
            St., b.1, ap. 21;
          </p>
          <p>Company Nr: 207067808 EU VAT: BG207067808</p>
        </div>
        <div className={styles.contactItem}>
          <h3>Email</h3>
          <p>
            <a href="ubmarket2022@gmail.com">ubmarket2022@gmail.com</a>
          </p>
        </div>
        <div className={styles.contactItem}>
          <h3>Phone</h3>
          <p>
            <a href="tel:+1234567890">+359 8844 69860</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
