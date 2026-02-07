import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import { useTranslation } from "react-i18next";
import styles from "./Contacts.module.scss";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contacts}>
      <Helmet>
        <title>{t("contactUs")}</title>
        <meta
          name="description"
          content={
            t("contactUsDescription") ||
            "Contact UB Market for inquiries and support."
          }
        />
        <meta
          name="keywords"
          content="UB Market, contact, address, email, phone, customer support"
        />
        <meta property="og:title" content={t("contactUs")} />
        <meta
          property="og:description"
          content={
            t("contactUsDescription") ||
            "Contact UB Market for inquiries and support."
          }
        />
        <meta property="og:url" content="https://ub-market.com/contacts" />
       
      </Helmet>

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
