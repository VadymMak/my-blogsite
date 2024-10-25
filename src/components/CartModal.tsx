import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation for translations
import styles from "./CartModal.module.scss"; // Import your modal styles

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation(); // Use translation hook
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // Add email state

  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{t("weWillCallYouBack")}</h2>
        <div className={styles.userInfo}>
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="phone">{t("phone")}</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="email">{t("email")}</label>{" "}
          {/* New email field label */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle email change
            required
          />
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.cancelButton}>
            {t("close")}
          </button>
          <button
            onClick={() => alert("Proceed to checkout")}
            className={styles.checkoutButton}
          >
            {t("callBack")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
