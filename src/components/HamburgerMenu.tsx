import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import useWindowSize from "../hooks/useWindowSize";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu if window width is greater than 768
  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

  // Function to close the menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={styles.hamburgerMenu__toggle}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="hamburger-menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <nav className={styles.menu} id="hamburger-menu">
            <ul>
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>{" "}
                {/* Close menu on click */}
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  About Us
                </Link>{" "}
                {/* Close menu on click */}
              </li>
              <li>
                <Link to="/products" onClick={handleLinkClick}>
                  Our Products
                </Link>{" "}
                {/* Close menu on click */}
              </li>
              <li>
                <Link to="/contacts" onClick={handleLinkClick}>
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
