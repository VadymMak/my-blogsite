import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Modal.module.scss";
import { IProduct } from "../constants/products";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

// Define the allowed languages as a type
type LanguageType = "en" | "bg" | "ua";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const { t, i18n } = useTranslation();
  const [isOrdering, setIsOrdering] = useState(false);
  const [formData, setFormData] = useState({
    quantity: 1,
    email: "",
    phone: "",
  });

  if (!isOpen || !product) return null;

  // Cast i18n.language to LanguageType
  const currentLang = i18n.language as LanguageType;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderClick = () => {
    setIsOrdering(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    setFormData({ quantity: 1, email: "", phone: "" });
    setIsOrdering(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.card}>
          <button
            className={styles.closeButton}
            onClick={() => {
              onClose();
              setIsOrdering(false);
            }}
          >
            &times;
          </button>

          <h3 className={styles.cardTitle}>{product.name[currentLang]}</h3>
          {product.description[currentLang]
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

          {!isOrdering ? (
            <div className={styles.modalFooter}>
              <button className={styles.orderButton} onClick={handleOrderClick}>
                {t("orderNow")}
              </button>
            </div>
          ) : (
            <form className={styles.orderForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="quantity">{t("quantity")}:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  min="1"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t("email")}:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">{t("phone")}:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.modalFooter}>
                <button type="submit" className={styles.submitButton}>
                  {t("submitOrder")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
