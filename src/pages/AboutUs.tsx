// AboutUs.jsx
import React from "react";
import styles from "./AboutUs.module.scss";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutUs}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>{t("aboutUs")}</h2>
          <p>{t("ubOperating")}</p>
          <p>{t("weGarantee")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
