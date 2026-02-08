import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contacts.module.scss";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contacts}>
      <div className={styles["contacts-title"]}>
        <h2>{t("contactUs")}</h2>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h3>{t("address")}</h3>
          <p>
            Bulgaria, Varna, 9010, Sirma Voivoda St., b.1, ap. 21,
            <strong> UB Market LTD</strong>
          </p>
        </div>
        <div className={styles.contactItem}>
          <h3>{t("email")}</h3>
          <p>
            <a href="mailto:ubmarket2022@gmail.com">ubmarket2022@gmail.com</a>
          </p>
        </div>
        <div className={styles.contactItem}>
          <h3>{t("phone")}</h3>
          <p>
            <a href="tel:+359884469860">+359 8844 69860</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;