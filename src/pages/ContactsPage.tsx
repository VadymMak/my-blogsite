import React from "react";
import { Helmet } from "react-helmet"; // Ensure you have react-helmet installed
import styles from "./ContactsPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next"; // Import useTranslation for i18n

const ContactsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactsPage}>
      <Helmet>
        <title>{t("contactPageTitle")}</title>
        <meta name="description" content={t("contactMetaDescription")} />
        <meta name="keywords" content={t("contactMetaKeywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ub-markets.netlify.app/contact" />
      </Helmet>

      <h1>{t("contactTitle")}</h1>
      <p>{t("contactMetaDescription")}</p>

      <section className={styles.contactInfo}>
        <h2>{t("contactTitle")}</h2>
        <p>
          <strong>{t("address")}</strong> 1234 Market Street, Suite 100
          <br />
          Varna, Bulgaria, {t("cityStateZip")} 9010, Sirma Voivoda St., b.1, ap.
          21
        </p>
      </section>

      <section className={styles.officeHours}>
        <h2>{t("officeHours")}</h2>
        <p>{t("officeHoursText")}</p>
        <ul>
          <li>{t("mondayToFriday")}</li>
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
            allowFullScreen
            loading="lazy"
            title={t("findUsTitle")}
          ></iframe>
        </div>
      </section>

      <section className={styles.followUs}>
        <h2>{t("followUs")}</h2>
        <p>{t("stayConnected")}</p>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://telegram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://whatsapp.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactsPage;
