import React from "react";
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
  if (!isOpen || !product) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.card}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <p className={styles.cardDescription}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
