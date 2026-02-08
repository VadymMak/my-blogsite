import React from "react";
import styles from "./ContactsPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactsPage}>
      <section className={styles.contactInfo}>
        <h2>{t("contactTitle")}</h2>
        <p>
          <strong>{t("address")} </strong>
          Bulgaria, Varna, 9010, Sirma Voivoda St., b.1, ap. 21,
        </p>
        <p>
          Phone: +359 8844 69860:
          <a href="tel:+359884469860">
            <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
            {t("callUs")}
          </a>
        </p>
      </section>

      <section>
        <h2>{t("officeHours")}</h2>
        <p>{t("weekdays")}</p>
        <p>{t("weekends")}</p>
      </section>

      <section>
        <h2>{t("followUs")}</h2>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/ub_market_ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/ub_market_ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+359884469860"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactsPage;