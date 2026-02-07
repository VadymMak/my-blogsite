import React from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Header.module.scss";
import LanguageDropdown from "./LanguageDropdown";

interface HeaderProps {
  changeLanguage: (lang: string) => void;
  currentLanguage: string;
}

const Header: React.FC<HeaderProps> = React.memo(
  ({ changeLanguage, currentLanguage }) => {
    const { width } = useWindowSize();
    const location = useLocation();
    const isBlogPage = location.pathname === "/blog";

    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="/icons/logo.webp"
              alt="UB Market Logo"
              className={styles.logoImage}
              width={120}
              height={80}
              fetchPriority="high"
            />
          </Link>
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

        {/* Pass current language to LanguageDropdown */}
        <LanguageDropdown
          changeLanguage={changeLanguage}
          currentLanguage={currentLanguage}
          isBlogPage={isBlogPage}
        />

        {width < 768 && <HamburgerMenu />}
      </header>
    );
  }
);

export default Header;
