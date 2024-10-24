// Contact.tsx
import React, { useState } from "react";
import styles from "./Contacts.module.scss";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    quantity: "",
    email: "",
    phone: "",
  });
  //   const [error, setError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="quantity">Product Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* {error && <p className={styles.error}>{error}</p>} */}

        <button type="submit">Submit</button>
      </form>

      <div className={styles.contactList}>
        <h3>Contact Information</h3>
        <ul>
          <li>
            <strong>Email:</strong> support@ub-market.com
          </li>
          <li>
            <strong>Phone:</strong> +1 (800) 123-4567
          </li>
          <li>
            <strong>Address:</strong> 123 Market St, City, Country
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
