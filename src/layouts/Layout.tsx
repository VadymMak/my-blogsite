import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import "../../src/118n/i18n";
import { useEffect } from "react";
import styles from "./Layout.module.scss";

const Layout = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).catch((error) => {
      console.error("Error changing language:", error);
    });
  };

  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    if (!i18n.languages.includes(browserLanguage)) {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <div className={styles.layoutContainer}>
      <Header changeLanguage={changeLanguage} currentLanguage={""} />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
