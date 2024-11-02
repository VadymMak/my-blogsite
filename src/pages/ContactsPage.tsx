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
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactsPage}>
      <Helmet>
        <title>{t("contactPageTitle")}</title>
        <meta name="description" content={t("contactMetaDescription")} />
        <meta
          name="keywords"
          content={t("contactMetaKeywords") + ", contact, UB Market, Varna"}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ub-markets.com/contact" />
        <meta
          property="og:title"
          content="Contact UB Market | Get Assistance and Find Our Location"
        />
        <meta
          property="og:description"
          content="Get in touch with UB Market! Visit our contact page for our address, office hours, and social media links. We're here to assist you with all your inquiries."
        />
        <meta property="og:url" content="https://ub-market.com/contact" />
        <meta
          property="og:image"
          content="https://ub-market.com/images/logo.png"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UB Market",
            url: "https://ub-market.com",
            logo: "https://ub-market.com/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+359 8844 69860",
              contactType: "Customer Service",
              areaServed: "BG",
              availableLanguage: ["English", "Bulgarian", "Ukrainian"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "1234 Market Street, Suite 100",
              addressLocality: "Varna",
              postalCode: "9010",
              addressCountry: "BG",
            },
          })}
        </script>
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
        <p>
          Phone: +359 8844 69860:
          <a href="tel:+359884469860">
            <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
            Call us
          </a>
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
              href="https://www.instagram.com/ub_market_ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/your_username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/your_phone_number"
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
