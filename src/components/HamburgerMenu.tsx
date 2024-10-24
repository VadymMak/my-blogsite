import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  if (width > 768) {
    isOpen && setIsOpen(false);
  }

  return (
    <div className={styles.hamburgerMenu}>
      <button className={styles.hamburgerMenu__toggle} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <nav className={styles.menu}>
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
                <a href="/contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
