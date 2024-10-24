import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

// @ts-ignore
import Flag from "react-world-flags";
import LanguageDropdown from "./LanguageDropdown";

interface HeaderProps {
  changeLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ changeLanguage }) => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/images/logo-white-text.png"
          alt="UB Market Logo"
          className={styles.logoImage}
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
      <LanguageDropdown />
      {width < 768 && <HamburgerMenu />}
    </header>
  );
};

export default Header;
