import React from "react";
import styles from "./Banner.module.scss";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("bannerTitle")}</title>
        <meta name="description" content={t("bannerDescription")} />
        <meta
          name="keywords"
          content="sunflower, trading, collaboration, agriculture"
        />
      </Helmet>
      <section className={styles.banner} aria-label={t("bannerLabel")}>
        <div className={styles["banner-content"]}>
          <h1>{t("sunflowerTraiding")}</h1>
          <p>{t("collaboration")}</p>
        </div>
      </section>
    </>
  );
};

export default Banner;
