import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { width } = useWindowSize();

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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      {width < 768 && <HamburgerMenu />}
    </header>
  );
};

export default Header;
