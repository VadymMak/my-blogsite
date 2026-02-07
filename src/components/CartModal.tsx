import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import styles from "./CartModal.module.scss";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-labelledby="modalTitle"
      aria-modal="true"
    >
      <Helmet>
        <title>{t("weWillCallYouBack")}</title>
        <meta
          name="description"
          content={
            t("callbackDescription") ||
            "Provide your contact information for a callback."
          }
        />
        <meta
          name="keywords"
          content="callback, contact, UB Market, customer service"
        />
        <meta property="og:title" content={t("weWillCallYouBack")} />
        <meta
          property="og:description"
          content={
            t("callbackDescription") ||
            "Provide your contact information for a callback."
          }
        />
        <meta
          property="og:image"
          content="https://ub-market.com/images/logo.webp"
        />
        <meta property="og:url" content="https://ub-market.com/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactAction",
              name: t("weWillCallYouBack"),
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://ub-market.com/contact",
              },
              actionStatus: "https://schema.org/PotentialActionStatus",
              agent: {
                "@type": "Organization",
                name: "UB Market",
              },
              description:
                t("callbackDescription") ||
                "Provide your contact information for a callback.",
            }),
          }}
        />
      </Helmet>

      <div className={styles.modalContent}>
        <h2 id="modalTitle">{t("weWillCallYouBack")}</h2>
        <form>
          <div className={styles.userInfo}>
            <label htmlFor="name">{t("name")}</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
              aria-label={t("enterYourName")}
              placeholder={t("enterYourName")}
            />
            <label htmlFor="phone">{t("phone")}</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              aria-required="true"
              aria-label={t("enterYourPhone")}
              placeholder={t("enterYourPhone")}
            />
            <label htmlFor="email">{t("email")}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-label={t("enterYourEmail")}
              placeholder={t("enterYourEmail")}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
              aria-label={t("close")}
            >
              {t("close")}
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Proceed to checkout");
              }}
              className={styles.checkoutButton}
              aria-label={t("callBack")}
            >
              {t("callBack")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartModal;
