// src/components/PhoneIcon.tsx
import React, { useState } from "react";
// import CallbackModal from "./CallbackModal";
import styles from "./PhoneIcon.module.scss"; // Import the styles for the phone icon
import CartModal from "./CartModal";

const PhoneIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={styles.phoneIcon}>
        <button onClick={handleOpenModal}>
          <img src="/images/Phone_icon.webp" alt="Phone Icon" />
        </button>
      </div>
      <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default PhoneIcon;
