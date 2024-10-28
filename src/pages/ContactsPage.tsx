// src/pages/Contact.tsx
import React, { useState } from "react";
import styles from "./ContactsPage.module.scss";

const CONTACT_INFO = {
  email: "support@ub-market.com",
  phone: "+1 (800) 123-4567",
  address: "123 Market St, City, Country",
};

type FormData = {
  quantity: string;
  email: string;
  phone: string;
};

const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    quantity: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.quantity || !formData.email || !formData.phone) {
      setError("All fields are required.");
      return;
    }
    setError(null);
    console.log("Form submitted:", formData);
  };

  const FormField = ({
    label,
    name,
    type = "text",
  }: {
    label: string;
    name: keyof FormData;
    type?: string;
  }) => (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label}:</label>
      <input
        id={name}
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        aria-label={label}
      />
    </div>
  );

  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <FormField label="Product Quantity" name="quantity" />
        <FormField label="Email" name="email" type="email" />
        <FormField label="Phone" name="phone" type="tel" />

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit">Submit</button>
      </form>

      <div className={styles.contactList}>
        <h3>Contact Information</h3>
        <ul>
          <li>
            <strong>Email:</strong> {CONTACT_INFO.email}
          </li>
          <li>
            <strong>Phone:</strong> {CONTACT_INFO.phone}
          </li>
          <li>
            <strong>Address:</strong> {CONTACT_INFO.address}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
