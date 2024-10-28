import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { useTranslation } from "react-i18next";
import "../../src/118n/i18n";

const Layout = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Header changeLanguage={changeLanguage} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
