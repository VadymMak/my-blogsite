import React from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Header.module.scss";
import LanguageDropdown from "./LanguageDropdown";

interface HeaderProps {
  changeLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = React.memo(({ changeLanguage }) => {
  const { width } = useWindowSize();
  const location = useLocation();

  // Check if the current route is the Blog page
  const isBlogPage = location.pathname === "/blog";

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/images/logo-white-text.png"
          alt="UB Market Logo"
          className={styles.logoImage}
          loading="lazy"
        />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Our Products</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      {/* Pass the language options based on the page */}
      <LanguageDropdown
        changeLanguage={changeLanguage}
        isBlogPage={isBlogPage}
      />

      {width < 768 && <HamburgerMenu />}
    </header>
  );
});

export default Header;
