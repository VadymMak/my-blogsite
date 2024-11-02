import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Е-mail: ubmarket2022@gmail.com</p>
          <p>
            Phone: +359 8844 69860:{" "}
            <a href="tel:+359884469860">
              <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
              Call us
            </a>
          </p>
        </div>
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/ub_market_ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://t.me/your_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a
              href="https://wa.me/your_phone_number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 UB Market LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
