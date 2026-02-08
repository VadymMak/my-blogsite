import React from "react";
import styles from "./AboutUs.module.scss";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutUs} aria-labelledby="aboutUsHeading">
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 id="aboutUsHeading">{t("aboutUs")}</h2>
          <div className={styles.textContainer}>
            <p>{t("ubOperating")}</p>
            <p dangerouslySetInnerHTML={{ __html: t("weGarantee") }} />
            <p>{t("aboutUsDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;