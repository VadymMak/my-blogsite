// src/components/CartModal.tsx
import React, { useState } from "react";
import styles from "./CartModal.module.scss"; // Import your modal styles

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { id: number; name: string; price: number; quantity: number }[]; // Pass cart items as props
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, items }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null; // Don't render anything if not open

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ); // Calculate total

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Wee eill call You back. Leave You phone</h2>
        <div className={styles.userInfo}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <h3 className={styles.total}>Total: ${total.toFixed(2)}</h3>
        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.cancelButton}>
            Close
          </button>
          <button
            onClick={() => alert("Proceed to checkout")}
            className={styles.checkoutButton}
          >
            Checkout
          </button>{" "}
          {/* Replace with actual checkout logic */}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
