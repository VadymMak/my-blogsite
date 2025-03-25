import React from "react";
import { Helmet } from "react-helmet";
import styles from "./AboutUs.module.scss";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("aboutUs")}</title>
        <meta
          name="description"
          content={
            t("aboutUsDescription") ||
            "Learn more about our operations and guarantees."
          }
        />
        <meta
          name="keywords"
          content="about us, company information, ub market"
        />
      </Helmet>

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
    </>
  );
};

export default AboutUs;
