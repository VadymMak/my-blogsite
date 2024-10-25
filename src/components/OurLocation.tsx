import React from "react";
import styles from "./OurLocation.module.scss";

import { useTranslation } from "react-i18next";

const OurLocation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.map}>
      <h2>{t("ourLocation")}</h2>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93031.0181942096!2d27.78026205034398!3d43.2258611704557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45439205714b3%3A0x99c4e0902fa8939b!2s9010%20Varna%2C%20Bulgaria!5e0!3m2!1sen!2spl!4v1729407709833!5m2!1sen!2spl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default OurLocation;
