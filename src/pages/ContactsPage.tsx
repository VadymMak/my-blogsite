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
        <p>{t("officeHoursText")}</p>
        <p>{t("mondayToFriday")}</p>
        <p>{t("saturday")}</p>
        <p>{t("sunday")}</p>
      </section>

      <section>
        <h2>{t("findUsHere")}</h2>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93031.0181942096!2d27.78026205034398!3d43.2258611704557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45439205714b3%3A0x99c4e0902fa8939b!2s9010%20Varna%2C%20Bulgaria!5e0!3m2!1sen!2spl!4v1729407709833!5m2!1sen!2spl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Google Map - UB Market Location"
        />
      </section>

      <section>
        <h2>{t("followUs")}</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/ub_market_ltd" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://t.me/ub_market_ltd" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+359884469860" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactsPage;