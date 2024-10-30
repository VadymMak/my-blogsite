import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import useWindowSize from "../hooks/useWindowSize";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Automatically close the menu on larger screens
  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={styles.hamburgerMenu__toggle}
        onClick={toggleMenu}
        aria-expanded={isOpen} // Accessibility enhancement
        aria-label="Toggle menu" // Accessibility enhancement
      >
        {isOpen ? "✖" : "☰"}
      </button>
      {isOpen && (
        <div className={styles.overlay} onClick={closeMenu} role="button">
          <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>{" "}
                {/* Close menu on click */}
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About Us
                </Link>{" "}
                {/* Close menu on click */}
              </li>
              <li>
                <Link to="/products" onClick={closeMenu}>
                  Our Products
                </Link>{" "}
              </li>
              <li>
                <Link to="/blog" onClick={closeMenu}>
                  Blog
                </Link>{" "}
              </li>
              <li>
                <Link to="/contacts" onClick={closeMenu}>
                  Contacts
                </Link>{" "}
                {/* Close menu on click */}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
