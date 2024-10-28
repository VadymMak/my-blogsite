import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";

interface HeaderProps {
  changeLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = React.memo(({ changeLanguage }) => {
  const { width } = useWindowSize();

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
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      {/* Pass changeLanguage to the LanguageDropdown */}
      <LanguageDropdown changeLanguage={changeLanguage} />

      {width < 768 && <HamburgerMenu />}
    </header>
  );
});

export default Header;
