import React from "react";
import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutPage}>
      <Helmet>
        <title>{t("aboutUs")} - Your Company Name</title>
        <meta
          name="description"
          content={t(
            "We are a leading provider of high-quality food products including mayonnaise, vegetable oil, milk, margarine, and powdered goods."
          )}
        />
        <meta
          name="keywords"
          content="mayonnaise, vegetable oil, milk, margarine, food products"
        />
        <meta property="og:title" content={t("aboutUs")} />
        <meta
          property="og:description"
          content={t(
            "We are a leading provider of high-quality food products including mayonnaise, vegetable oil, milk, margarine, and powdered goods."
          )}
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Your Company Name",
            url: "https://yourwebsite.com",
            logo: "https://yourwebsite.com/images/logo.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-234-567-890",
              contactType: "Customer Service",
              areaServed: "Global",
              availableLanguage: ["English", "Bulgarian", "Ukrainian"],
            },
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://twitter.com/yourpage",
              "https://www.instagram.com/yourpage",
            ],
          })}
        </script>
      </Helmet>
      <div className={styles.container}>
        <section className={styles.section}>
          <h1 className={styles.title}>{t("aboutUs")}</h1>
          <p className={styles.intro}>{t("aboutUsTitle")}</p>
        </section>

        {/* <section className={styles.section}>
          <h2 className={styles.title}>{t("ourMission")}</h2>
          <p>{t("ourMissionTitle")}</p>
        </section> */}

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
