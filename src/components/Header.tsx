import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/images/logo.png"
          alt="UB Market Logo"
          className={styles.logoImage}
        />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/products">Our Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      {width < 768 && <HamburgerMenu />}
    </header>
  );
};

export default Header;
