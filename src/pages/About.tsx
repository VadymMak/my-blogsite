import React from "react";
import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <section className={styles.section}>
          <h1 className={styles.title}>{t("aboutUs")}</h1>
          <p className={styles.intro}>{t("aboutUsTitle")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>{t("ourVision")}</h2>
          <p>{t("ourVisionTitle")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>{t("ourValues")}</h2>
          <ul className={styles.valuesList}>
            <li>
              <strong>{t("Quality")}</strong> {t("qualityTitle")}
            </li>
            <li>
              <strong>{t("Integrity")}</strong> {t("integrityTitle")}
            </li>
            <li>
              <strong>{t("customerFocus")}</strong> {t("customerFocusTitle")}
            </li>
            <li>
              <strong>{t("innovation")}</strong> {t("innovationTitle")}
            </li>
            <li>
              <strong>{t("sustainability")}</strong> {t("sustainabilityTitle")}
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>{t("ourHistory")}</h2>
          <p>{t("ourHistoryTitle")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>{t("ourTeam")}</h2>
          <p>{t("ourTeamTitle")}</p>
        </section>
      </div>
    </div>
  );
};

export default About;