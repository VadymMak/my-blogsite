import React from "react";
import styles from "./Banner.module.scss";

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.banner}>
      <div className={styles["banner-content"]}>
        <h1>{t("sunflowerTraiding")}</h1>
        <p>{t("collaboration")}</p>
      </div>
    </section>
  );
};

export default Banner;
