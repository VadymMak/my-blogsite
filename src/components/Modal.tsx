import React, { useState } from "react";
import styles from "./Modal.module.scss";

interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [formData, setFormData] = useState({
    quantity: 1,
    email: "",
    phone: "",
  });

  if (!isOpen || !product) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderClick = () => {
    setIsOrdering(true); // Open the form
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., sending to a server or API)
    console.log("Order submitted:", formData);
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
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <p className={styles.cardDescription}>{product.description}</p>

          {!isOrdering ? (
            <div className={styles.modalFooter}>
              <button className={styles.orderButton} onClick={handleOrderClick}>
                Order Now
              </button>
            </div>
          ) : (
            <form className={styles.orderForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="quantity">Quantity:</label>
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
                <label htmlFor="email">Email:</label>
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
                <label htmlFor="phone">Phone:</label>
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
                  Submit Order
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
