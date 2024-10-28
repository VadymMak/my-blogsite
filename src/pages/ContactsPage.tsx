// src/pages/ContactsPage.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactsPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ContactsPage: React.FC = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className={styles.contactsPage}>
      <h1>{t("contactUs")}</h1>

      <p>{t("helpText")}</p>

      <section className={styles.contactInfo}>
        <h2>{t("ourContactInfo")}</h2>
        <p>
          <strong>{t("phone")}:</strong> +359 8844 69860
        </p>
        <p>
          <strong>{t("email")}:</strong> ubmarket2022@gmail.com
        </p>
        <p>
          <strong>{t("address")}:</strong> Bulgaria, Varna, 9010, Sirma Voivoda
          St., b.1, ap. 21;
          <br />
          <strong>{t("cityStateZip")} </strong> 9010
        </p>
      </section>

      <section className={styles.officeHours}>
        <h2>{t("officeHours")}</h2>
        <p>{t("officeHoursText")}</p>
        <ul>
          <li>{t("mondayFriday")}</li>
          <li>{t("saturday")}</li>
          <li>{t("sunday")}</li>
        </ul>
      </section>

      <section className={styles.locationMap}>
        <h2>{t("findUsTitle")}</h2>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93031.0181942096!2d27.78026205034398!3d43.2258611704557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45439205714b3%3A0x99c4e0902fa8939b!2s9010%20Varna%2C%20Bulgaria!5e0!3m2!1sen!2spl!4v1729407709833!5m2!1sen!2spl"
            className={styles.map}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      <section className={styles.followUs}>
        <h2>{t("followUs")}</h2>
        <p>{t("stayConnected")}</p>
        <ul>
          <li>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://telegram.org/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a
              href="https://whatsapp.com/yourpage"
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
